import fetch from 'node-fetch'

exports.handler = async function () {

	try {
		const POKE_API = 'https://pokeapi.co/api/v2/pokedex/kanto'
		const response = await fetch(POKE_API)
		const data = await response.json()
		return {
			statusCode: 200,
			body: JSON.stringify(data)
		}
	} catch (error) {
		console.log(error);
		return {
			statusCode: 500,
			body: JSON.stringify({
				error: 'Failed fetching data' }
			)
		};
	}


	

}