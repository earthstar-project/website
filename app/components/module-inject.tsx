export default function ModuleInject() {
	return <script
		type="module"
		dangerouslySetInnerHTML={{
			__html:
				`import * as Earthstar from "https://cdn.earthstar-project.org/js/earthstar.bundle.v8.0.0.js";
				
				globalThis.Earthstar = Earthstar;`,
		}}
	/>
}