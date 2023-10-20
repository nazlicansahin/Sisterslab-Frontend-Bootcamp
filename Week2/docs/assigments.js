const pokemons = [
  { id: 3, name: 'Bulbasaur', type: 'Grass', experience: 64 },
  { id: 7, name: 'Charmander', type: 'Fire', experience: 62 },
  { id: 13, name: 'Squirtle', type: 'Water', experience: 63 },
  { id: 56, name: 'Caterpie', type: 'Bug', experience: 39 },
  { id: 1408, name: 'Ekans', type: 'Poison', experience: 58 },
  { id: 63, name: 'Eevee', type: 'Normal', experience: 65 },
  { id: 27, name: 'Pikachu', type: 'Electric', experience: 112 },
  { id: 31, name: 'Pidgey', type: 'Flying', experience: 50 },
  { id: 21, name: 'Meowth', type: 'Normal', experience: 58 },
  { id: 22, name: 'Snorlax', type: 'Normal', experience: 154 },
  { id: 35, name: 'Psyduck', type: 'Water', experience: 64 },
];

//Yukarıdaki dizi içinde bulunan "Water" türündeki Pokemonları `filter` kullanarak filtrelemek istiyoruz.
//Filtreleme işlemi sonucunda kaç "Water" türündeki Pokemon olduğunu ve bu Pokemon'ların isimlerini bulmanız gerekiyor.

//***********************************ÇÖZÜM 1 BAŞ***********************************//

// "Water" türündeki Pokemon'ları filtrele
const waterPokemons = pokemons.filter(pokemon => pokemon.type === 'Water');

// "Water" türündeki Pokemon sayısı
const waterPokemonCount = waterPokemons.length;

// "Water" türündeki Pokemon'ların isimleri
const waterPokemonNames = waterPokemons.map(pokemon => pokemon.name);



console.log(`"Water" türündeki Pokemon sayısı: ${waterPokemonCount}`);
console.log(`"Water" türündeki Pokemon'ların isimleri: ${waterPokemonNames.join(', ')}`);

//***********************************ÇÖZÜM 1 SON***********************************//

//Yukarıdaki dizide bulunan her bir Pokemon'un deneyim puanını 2 katına çıkarmak ve bu işlem sonucunda yeni bir dizi oluşturmak istiyorsunuz.
//Bu yeni dizi, her Pokemon'un adını ve yeni deneyim puanını içermelidir.

//***********************************ÇÖZÜM 2 BAŞ***********************************//


// Her bir Pokemon'un deneyim puanını iki katına çıkararak yeni dizi oluştur
const doubledExperience = pokemons.map(pokemon => ({
  name: pokemon.name,
  experience: pokemon.experience * 2,
}));


console.log(doubledExperience);
//**************************************ÇÖZÜM 2 SON ********************************//

//Pokemon dizisinde, tüm "Water" türündeki Pokemonlar deneyim puanlarının en az 60 olduğu bir koşulu karşılıyor mu ?
// Ayrıca, "Fire" türündeki Pokemonlar içinden en az birinin deneyim puanı 70 veya daha fazla mı ?
// Bu iki koşulu kontrol eden ve sonuçları ekrana yazdıran bir kod yazın.
//***********************************ÇÖZÜM 3 BAŞ***********************************//



// Tüm "Water" türündeki Pokemon'lar deneyim puanlarının en az 60 olduğu koşulu
const   allWaterPokemonsHighExperience = pokemons.filter(pokemon => pokemon.type === 'Water' && pokemon.experience >= 60);

// "Fire" türündeki Pokemon'lar içinden en az birinin deneyim puanı 70 veya daha fazla olduğu koşulu
const someFirePokemonHighExperience = pokemons.some(pokemon => pokemon.type === 'Fire' && pokemon.experience >= 70);
console.log(
  "Tüm 'Water' türündeki Pokemonlar deneyim puanı en az 60 mı?",
  allWaterPokemonsHighExperience
);
console.log(
  "'Fire' türündeki Pokemonlardan en az biri deneyim puanı 70 veya daha fazla mı?",
  someFirePokemonHighExperience
);


//***********************************ÇÖZÜM 3 SON***********************************//


//Pokemon dizisinde bulunan "Electric" türündeki Pokemon'ların deneyim puanlarının toplamını
// kullanarak hesaplamak istiyorsunuz.

//***********************************ÇÖZÜM 4 BAŞ***********************************//

// "Electric" türündeki Pokemon'ların deneyim puanlarını topla
const     totalElectricExperience= pokemons
  .filter(pokemon => pokemon.type === 'Electric')
  .reduce((total, pokemon) => total + pokemon.experience, 0);

console.log(
  "Electric türündeki Pokemon'ların toplam deneyim puanı: " +
    totalElectricExperience
);

//***********************************ÇÖZÜM 4 SON***********************************//


//Pokemon dizisinde, her türdeki Pokemon'ların deneyim puanlarının ortalamasını hesaplamak istiyorsunuz.
//**************************************ÇÖZÜM 5 BAŞ ********************************/


// Her türdeki Pokemon'ların deneyim puanlarının ortalamasını hesapla
const typeExperienceAverages = {};

pokemons.forEach(pokemon => {
  if (!typeExperienceAverages[pokemon.type]) {
    typeExperienceAverages[pokemon.type] = {
      totalExperience: 0,
      count: 0,
    };
  }
  typeExperienceAverages[pokemon.type].totalExperience += pokemon.experience;
  typeExperienceAverages[pokemon.type].count += 1;
});

for (const type in typeExperienceAverages) {
  typeExperienceAverages[type].averageExperience = typeExperienceAverages[type].totalExperience / typeExperienceAverages[type].count;
}


console.log(typeExperienceAverages);
