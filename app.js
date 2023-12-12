let pronoun = ['the', 'our','my','their','yours','a'];
let adj = ['great', 'big','holy','safe','reliable'];
let noun = ['car', 'mountain','airplane','ship'];
let extension = ['.com','.net','.us','.io'];

for (let i=0; i<pronoun.length;i++){
    let pronI = pronoun[i];
    for (let a=0; a<adj.length;a++){
        let adjA = adj[a];
        for (let b=0; b<noun.length;b++){
            let nounB = noun[b];
            for (let c=0; c<extension.length;c++){
                let extensionC = extension[c];
                let output = pronI+adjA+nounB+extensionC;
                console.log(output);
            }
        }
    }

}
