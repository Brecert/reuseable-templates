/**
 * creates a reuseable template literal that can be called with the arguements to fill in the types
 */
function fmt(strings, ...placeholderTypes) {
    const constIndexes = placeholderTypes.map((p, i) => {
        if (p !== Number && p !== String && p !== Object && p !== JSON) {
            return i;
        }
    }).filter(p => p !== undefined);
    return function (...placeholders) {
        let offset = 0;
        return strings.map((s, i) => {
            const formatted = () => {
                switch (true) {
                    case constIndexes.includes(i): {
                        offset += 1;
                        return placeholderTypes[i];
                    }
                    case placeholderTypes[i] === JSON || placeholderTypes[i] === Object: {
                        return JSON.stringify(placeholders[i]);
                    }
                    case placeholderTypes[i] === String: {
                        return `${placeholders[i - offset]}`;
                    }
                    case placeholderTypes[i] === Number: {
                        const n = placeholders[i - offset];
                        if (Number.isInteger(n)) {
                            return `${n}`;
                        }
                        else {
                            return Number.parseFloat(n).valueOf();
                        }
                    }
                    default: {
                        return placeholders[i - offset] || "";
                    }
                }
            };
            return `${s}${formatted()}`;
        }).join('');
    };
}

export default fmt;
//# sourceMappingURL=index.js.map
