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
    },
    willLikelySurvive() {
      let countTotal = 0;
      for (const element of this._dna) {
        if (element === 'C' || element === 'G') {
          countTotal++;
        }
      };
      const percCG = Math.floor((countTotal / this._dna.length)*100);
      if (percCG >= 60) {
        return true;
      } else {
        return false;
      };
    },
    complementStrand() {
      let compStrand = [];
      for (let element of this._dna) {
        if (element === 'A') {
          compStrand.push('T')
        } else if (element === 'T') {
          compStrand.push('A')
        } else if (element === 'G') {
          compStrand.push('C')
        } else if (element === 'C') {
          compStrand.push('G')
        }
      };
      return compStrand;
    }
  }
};


let pAequoris = [];

let counterValid = 1;

while (counterValid <= 30) {
  let pAequori = pAequorFactory(counterValid, mockUpStrand())
  if (pAequori.willLikelySurvive) {
    pAequoris.push(pAequori);
    counterValid++;
  };
}

console.log(pAequoris[1]._dna);
console.log(pAequoris[1].complementStrand());





