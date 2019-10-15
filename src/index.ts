export type PlaceholderType = typeof Number | typeof String | typeof Object | typeof JSON | string | number | any

/**
 * creates a reuseable template literal that can be called with the arguements to fill in the types
 */
export default function fmt(strings: TemplateStringsArray, ...placeholderTypes: PlaceholderType[]) {
	const constIndexes = placeholderTypes.map((p, i) => {
		if(p !== Number && p !== String && p !== Object && p !== JSON) {
			return i
		}
	}).filter(p => p !== undefined)

	return function(...placeholders: any[]): string {
		let offset = 0;

		return strings.map((s, i) => {
			const formatted = () => {
				switch (true) {
					case constIndexes.includes(i): {
						offset += 1
						return placeholderTypes[i];
					}
					case placeholderTypes[i] === JSON || placeholderTypes[i] === Object: {
						return JSON.stringify(placeholders[i])
					}
					case placeholderTypes[i] === String: {
						return `${placeholders[i - offset]}`
					}
					case placeholderTypes[i] === Number: {
						const n = placeholders[i - offset] as number
						if(Number.isInteger(n)) {
							return `${n}`
						} else {
							return Number.parseFloat(n as any).valueOf()
						}
					}
					default: {
						return placeholders[i - offset] || ""
					}
				}
			}

			return `${s}${formatted()}`
		}).join('')
	}
}