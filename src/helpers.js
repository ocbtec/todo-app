export function randomArrayItem(data) {
    return data[Math.floor(Math.random() * data.length)];
}

export function getRandomTagline() {
    const taglines = [
        "This could be your bucket List",
        "This could be your shopping List",
        "This could be your project List"
    ];
    return randomArrayItem(taglines);
}
