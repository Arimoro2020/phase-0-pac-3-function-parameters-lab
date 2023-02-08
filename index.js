function introduction(name){
    let thephrase = `Hi, my name is ${name}.`;
    return thephrase;
}

function introductionWithLanguage(name, language) {
    let thephrase = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    return thephrase;
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
    let thephrase = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    return thephrase;
}