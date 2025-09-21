// Define MajorCredits and MinorCredits interfaces with brand properties
interface MajorCredits {
  credits: number;
  _brand: "MajorCredits"; // unique brand
}

interface MinorCredits {
  credits: number;
  _brand: "MinorCredits"; // unique brand
}

// Functions to sum credits while preserving brand types
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits, _brand: "MajorCredits" };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits, _brand: "MinorCredits" };
}

// Example usage
const math: MajorCredits = { credits: 3, _brand: "MajorCredits" };
const physics: MajorCredits = { credits: 4, _brand: "MajorCredits" };
const art: MinorCredits = { credits: 2, _brand: "MinorCredits" };
const music: MinorCredits = { credits: 1, _brand: "MinorCredits" };

console.log(sumMajorCredits(math, physics)); // { credits: 7, _brand: 'MajorCredits' }
console.log(sumMinorCredits(art, music));   // { credits: 3, _brand: 'MinorCredits' }
