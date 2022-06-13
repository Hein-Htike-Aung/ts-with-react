import axios from 'axios';

const endpoint = 'https://rickandmortyapi.com/api/character';

const characterIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const getCharacter = async (id: number) => {
	return axios.get(`${endpoint}/${id}`).then((r: any) => r.data);
};

/* For loop */
const resultForLoop: any[] = [];
export const fetchCharactersUsingFor = async () => {
	for (let i = 0; i < characterIds.length; i++) {
		const character = await getCharacter(characterIds[i]);
		resultForLoop.push(`${character.id}: ${character.name}`);
	}
	console.log(resultForLoop);
};

/* ForEachLoop */
const resultForEachLoop: any[] = [];
export const fetchCharactersUsingForEach = async () => {
	characterIds.forEach(async (i) => {
		const character = await getCharacter(characterIds[i]);
		resultForLoop.push(`${character.id}: ${character.name}`);
	});

	console.log(resultForEachLoop);
};

/* Using Map and Promise all */

export const fetchCharactersUsingMapAndPromiseAll = async () => {
	const mapResult = characterIds.map((id) => getCharacter(id));

	const result = await Promise.all(mapResult);

	console.log(result);
};
