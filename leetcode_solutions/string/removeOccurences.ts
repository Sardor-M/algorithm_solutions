function removeOccurences(s: string, part: string){
    while(true){
        // birinchi o'xshashlikni toipamiz
        let i = s.indexOf(part);
        if(i === -1) break;
        // keyin o'xhshashlikni s dan olib tashlaymiz va 
        // substringni qaytaramiz
        s = s.slice(0, i) + s.slice(1 + part.length);
    }
    // remove bo'lgandan keyin stringni qaytaramiz
    return s;
}