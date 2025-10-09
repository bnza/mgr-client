import analysis from './data/analysis'
import analysisContextBotany from './data/analysisContextBotany'
import analysisContextZoo from './data/analysisContextZoo'
import analysisSampleMicrostratigraphy from './data/analysisSampleMicrostratigraphy'
import analysisSiteAnthropology from './data/analysisSiteAnthropology'
import analysisPottery from './data/analysisPottery'
import analysisIndividual from './data/analysisIndividual'
import analysisZooBone from './data/analysisZooBone'
import analysisZooTooth from './data/analysisZooTooth'
import botanyCharcoal from './data/botanyCharcoal'
import botanySeed from './data/botanySeed'
import currentUserSitePrivilege from './data/currentUserSitePrivilege'
import context from './data/context'
import * as contextStratigraphicUnit from './data/contextStratigraphicUnit'
import * as sampleStratigraphicUnit from './data/sampleStratigraphicUnit'
import * as sedimentCoreDepth from './data/sedimentCoreDepth'
import mediaObject from './data/mediaObject'
import microstratigraphicUnit from './data/microstratigraphicUnit'
import individual from './data/individual'
import pottery from './data/pottery'
import sample from './data/sample'
import sedimentCore from './data/sedimentCore'
import site from './data/site'
import siteUserPrivilege from './data/siteUserPrivilege'
import stratigraphicUnit from './data/stratigraphicUnit'
import user from './data/user'
import zooBone from './data/zooBone'
import zooTooth from './data/zooTooth'
import type { ResourceConfig, GetCollectionPath } from '~~/types'

export const RESOURCE_CONFIG_MAP = {
  '/api/admin/site_user_privileges': siteUserPrivilege,
  '/api/admin/users': user,
  '/api/admin/users/me/site_user_privileges': currentUserSitePrivilege,
  '/api/data/analyses': analysis,
  '/api/data/analyses/contexts/botany': analysisContextBotany,
  '/api/data/analyses/contexts/zoo': analysisContextZoo,
  '/api/data/analyses/individuals': analysisIndividual,
  '/api/data/analyses/samples/microstratigraphy':
    analysisSampleMicrostratigraphy,
  '/api/data/analyses/sites/anthropology': analysisSiteAnthropology,
  '/api/data/analyses/potteries': analysisPottery,
  '/api/data/analyses/zoo/bones': analysisZooBone,
  '/api/data/analyses/zoo/teeth': analysisZooTooth,
  '/api/data/botany/charcoals': botanyCharcoal,
  '/api/data/botany/seeds': botanySeed,
  '/api/data/context_stratigraphic_units': contextStratigraphicUnit.config,
  '/api/data/contexts': context,
  '/api/data/contexts/{parentId}/analyses/botany': analysisContextBotany,
  '/api/data/contexts/{parentId}/analyses/zoo': analysisContextZoo,
  '/api/data/contexts/{parentId}/stratigraphic_units':
    contextStratigraphicUnit.stratigraphicUnitSubResourceConfig,
  '/api/data/media_objects': mediaObject,
  '/api/data/microstratigraphic_units': microstratigraphicUnit,
  '/api/data/individuals': individual,
  '/api/data/individuals/{parentId}/analyses': analysisIndividual,
  '/api/data/potteries': pottery,
  '/api/data/sample_stratigraphic_units': sampleStratigraphicUnit.config,
  '/api/data/samples': sample,
  '/api/data/samples/{parentId}/stratigraphic_units':
    sampleStratigraphicUnit.stratigraphicUnitSubResourceConfig,
  '/api/data/sediment_cores': sedimentCore,
  '/api/data/sediment_core_depths': sedimentCoreDepth.config,
  '/api/data/sediment_cores/{parentId}/stratigraphic_units/depths':
    sedimentCoreDepth.stratigraphicUnitSubResourceConfig,
  '/api/data/sites': site,
  '/api/data/stratigraphic_units': stratigraphicUnit,
  '/api/data/stratigraphic_units/{parentId}/contexts':
    contextStratigraphicUnit.contextSubResourceConfig,
  '/api/data/stratigraphic_units/{parentId}/microstratigraphic_units':
    microstratigraphicUnit,
  '/api/data/stratigraphic_units/{parentId}/samples':
    sampleStratigraphicUnit.sampleSubResourceConfig,
  '/api/data/stratigraphic_units/{parentId}/sediment_cores/depths':
    sedimentCoreDepth.sedimentCoreSubResourceConfig,
  '/api/data/stratigraphic_units/{parentId}/zoo/bones': zooBone,
  '/api/data/stratigraphic_units/{parentId}/zoo/teeth': zooTooth,
  '/api/data/zoo/bones': zooBone,
  '/api/data/zoo/bones/{parentId}/analyses': analysisZooBone,
  '/api/data/zoo/teeth': zooTooth,
  '/api/data/zoo/teeth/{parentId}/analyses': analysisZooTooth,
} as const satisfies Partial<Record<GetCollectionPath, ResourceConfig>>
