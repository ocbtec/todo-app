class Storage {
    constructor() {
        if (!this.canUseLocalStorage()) {
            throw Error("The local storage is full or disabled");
        }
    }

    set(key, value) {
        localStorage.setItem(key, value);
    }

    get(key, defaultValue = null) {
        const value = localStorage.getItem(key);

        if (value !== null) {
            return value;
        }
        return defaultValue;
    }

    canUseLocalStorage() {
        let test = "Test";

        try {
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
        } catch (e) {
            return false;
        }
        return true;
    }
}

export default new Storage();
