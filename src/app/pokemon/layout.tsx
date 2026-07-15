import {fetchGenerations} from "@/lib/pokeapi";
import PokemonTabs from "@/components/PokemonTabs";

export default async function PokemonLayout(props: { children: React.ReactNode }) {
  const generations = await fetchGenerations()
  const validGenerations = generations.generations.map(x => x.id);

  return (
      <div className={'w-full flex flex-col items-center'}>
        <h2 className={'text-xl font-semibold py-2'}>Hi my name is Karter</h2>
        <PokemonTabs generations={validGenerations}/>
        <div className={'py-4'}>
          {props.children}
        </div>
      </div>
  )
}
