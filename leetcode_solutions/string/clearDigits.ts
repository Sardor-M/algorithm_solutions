function clearDigits(s: string): string {
    // edge case scenario
    if(s.length === 0) return s;
    // bu yerda birinchi num indexni olamiz 
    let numIndex = s.search(/\d/);

    while(numIndex !== -1){
        // raqam va character topilsa chapga suramiz
        s = s.slice(0, numIndex - 1) + s.slice(numIndex + 1);
        numIndex = s.search(/\d/);
    }

    // bu yerda esa udpate bolgan stringni qaytaramiz
    return s;
}