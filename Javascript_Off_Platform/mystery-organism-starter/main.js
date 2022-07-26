// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (id, dnaArray) => {
  return {
    _specimenNum: id,
    _dna: dnaArray,
    mutate() {
      // randomly select an index to mutate
      let randIndex = Math.floor(Math.random() * this._dna.length);

      // select a base to be mutated
      let baseToMutate = this._dna[randIndex];

      console.log(baseToMutate);

      // select new base to replace old base
      let newBase = returnRandBase();

      console.log(newBase);


      while (baseToMutate === newBase) {
        newBase = returnRandBase();
        console.log(newBase);
      };

      // replace old base with a random base
      this._dna.splice(randIndex, 1, newBase);

      return this._dna;
    }
}
};


let pAequor = pAequorFactory(1, mockUpStrand());
let pAequor2 = pAequor.mutate();

console.log(pAequor);
console.log(pAequor2);






