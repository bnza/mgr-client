import {AclVoters, ApiRole} from "~/utils/consts/auth";

type AclVote = string | true
export default defineNuxtRouteMiddleware((to) => {
  if (to.meta.public) return;

  const {isAuthenticated} = useAppAuth();
  const historyStack = useHistoryStackStore();
  if (!isAuthenticated.value) {
    historyStack.push({path: to.fullPath, isUserAction: false});
    return navigateTo('/login');
  }
  const voters: AclVoters[] = to.meta.voters || []

  if (voters.length === 0) return;

  const {hasRole} = useAppAuth()

  const hasRoleAdminVoter = (): AclVote => hasRole.value(ApiRole.Admin)
    ? true
    : 'Insufficient privileges: role EDITOR required';

  const hasRoleEditorVoter = (): AclVote => hasRole.value(ApiRole.Editor)
    ? true
    : 'Insufficient privileges: role EDITOR required';

  const allVoters: Record<AclVoters, () => AclVote> = {
    [AclVoters.HasRoleAdmin]: hasRoleAdminVoter,
    [AclVoters.HasRoleEditor]: hasRoleEditorVoter,
  } as const

  const messages: string[] = []

  voters.forEach(voter => {
    const message = allVoters[voter]()
    if (typeof message === 'string') messages.push(message)
  })

  if (messages.length > 0) {
    const messageStore = useMessagesStore()
    for (const message of messages) {
      messageStore.addError(message)
    }
    return abortNavigation(messages.join('\n'))
  }
});
