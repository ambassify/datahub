export function capitalizeFirstLetter(str?: string | null) {
    if (!str) {
        return undefined;
    }
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function lowerFirstLetter(str?: string | null) {
    if (!str) {
        return undefined;
    }
    return str.charAt(0).toLowerCase() + str.slice(1);
}

export function capitalizeFirstLetterOnly(str?: string | null) {
    if (!str) {
        return undefined;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}
