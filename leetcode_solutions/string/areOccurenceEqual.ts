function areOccurrencesEqual(s: string): boolean {
    const frequencyMap = new Map<string, number>();
    for(const character of s) {
        // update qilamiz frequency countni
        frequencyMap.set(character, (frequencyMap.get(character) || 0) + 1);
    }
    // first frequency value
    const firstFrequency = frequencyMap.values().next().value;
    // har bir frequencyni tekshirib chiqamiz
    for(const frequency of frequencyMap.values()){
        if(frequency != firstFrequency){
            return false;
        }
    }
    return true;
};