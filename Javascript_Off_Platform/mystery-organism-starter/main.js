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

const pAequorFactory = (specimenNum, dna) => {
  return {
    _specimenNum: specimenNum,
    _dna: dna,
    mutate() {

      // randomly select an index to mutate
      let randIndex = Math.floor(Math.random() * this._dna.length);

      // select a base to be mutated
      let baseToMutate = this._dna[randIndex];

      // select new base to replace old base
      let newBase = returnRandBase();


      while (this._dna[randIndex] === newBase) {
        newBase = returnRandBase();
      };

      // replace old base with a random base
      this._dna[randIndex] = newBase;

      return this._dna;
    },
    compareDNA(otherPAequor) {
      let countEq = 0;

      for (let i =0; i < this._dna.length; i++) {
        if (this._dna[i] === otherPAequor._dna[i]) {
          countEq++;
        }
      };
      const percEqual = Math.floor((countEq / this._dna.length)*100);

      console.log(`${this._specimenNum} and ${otherPAequor._specimenNum} have ${percEqual}% equal bases`);
    }
  }
};


let pAequor = pAequorFactory(1, mockUpStrand());
let pAequor2 = pAequorFactory(2, mockUpStrand());

pAequor.compareDNA(pAequor2);







