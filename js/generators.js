export function generateHooks(topic){
    const hooks = [
        `This ${topic} secret will shock you`,
        `Nobody talks about this ${topic}`,
        `The biggest ${topic} mistake`,
        `You are using ${topic} wrong`,
        `The truth about ${topic}`,
        `Why ${topic} changed everything`,
        `The hidden power of ${topic}`
    ];
    return hooks[Math.floor(Math.random()*hooks.length)];
}

export function generateScript(topic){
    return `Short script for ${topic}:\n1. Hook\n2. Problem\n3. Solution\n4. Call to Action`;
}

export function generateIdea(){
    const ideas = [
        "AI tools you didn't know",
        "Secrets of viral shorts",
        "Hidden tricks for growth",
        "Passive income ideas",
        "Viral content secrets"
    ];
    return ideas[Math.floor(Math.random()*ideas.length)];
}

export function generateHashtags(topic){
    return `#${topic.replace(/\s/g,'')} #Viral #AIShorts #Trending`;
}

export function generateCaption(topic){
    return `🔥 ${topic} | Watch till the end! #ViralForgeAI`;
}
