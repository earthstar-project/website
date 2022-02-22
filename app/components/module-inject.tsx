import {LATEST_EARTHSTAR_VERSION } from '~/constants'

export default function ModuleInject() {
  return (
    <script
      type="module"
      dangerouslySetInnerHTML={{
        __html:
          `import * as Earthstar from "https://cdn.earthstar-project.org/js/earthstar.bundle.v${LATEST_EARTHSTAR_VERSION}.js";
				
				globalThis.Earthstar = Earthstar;`,
      }}
    />
  );
}
