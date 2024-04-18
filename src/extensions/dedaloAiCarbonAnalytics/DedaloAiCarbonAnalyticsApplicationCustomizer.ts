import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';

const LOG_SOURCE: string = 'DedaloAiCarbonAnalyticsApplicationCustomizer';

export interface IDedaloAiCarbonAnalyticsApplicationCustomizerProperties {
  projectId: string;
}

export default class DedaloAiCarbonAnalyticsApplicationCustomizer
  extends BaseApplicationCustomizer<IDedaloAiCarbonAnalyticsApplicationCustomizerProperties> {

  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${LOG_SOURCE}`);

    const projectId: string = this.properties.projectId;

    const scriptTag: HTMLScriptElement = document.createElement("script");
    scriptTag.src = "https://static.dedalo.ai/boot.js";
    scriptTag.crossOrigin = "anonymous";
    scriptTag.integrity = "sha256-2rhLk7+q9slngi79xjWVYN7pGCHz73PB33Ko89c6rLc=";
    scriptTag.defer = true;
    scriptTag.id = "carbon-analytics";
    scriptTag.setAttribute("data-project", projectId);

    document.head.appendChild(scriptTag);

    return Promise.resolve();
  }
}
