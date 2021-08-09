type Miel = {
  id: string;
  titre: string;
  provenance: string;
  prix: number;
  rupture?: boolean;
  description: string;
  color: string;
  quantite: string;
  img: string;
  hide?: boolean;
}

import data from './miels.json'

export const title: string = data.title
export const description: string = data.description

export const miels: Miel[] = data.list
  .filter(({ hide }) => !hide)
  .map(miel => ({
    ...miel,
    id: miel.img.replace(/^.*\/(.*)\..*$/, '$1'),
  }))
  .sort((a, b) => {
    if (a.rupture && !b.rupture) return 1
    if (!a.rupture && b.rupture) return -1
    return 0
  })

