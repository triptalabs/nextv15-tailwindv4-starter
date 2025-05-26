export async function fetcher(url: string) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error al obtener los datos');
    }
    return response.json();
  }
  