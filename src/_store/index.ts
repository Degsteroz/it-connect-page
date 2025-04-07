import { create } from 'zustand';

import { IClosestEvent } from '@/_interfaces';
import { Meetup, Network } from '@/_sections/eventsSection/data';

interface IState {
  closestEvent: IClosestEvent | null
  events: ((Meetup | Network) & {id: number})[]
  setClosestEvent: (_closestEvent: IClosestEvent) => void
  setEvents: (_events: ((Meetup | Network) & {id: number})[]) => void
}

const useStore = create<IState>((set) => ({
  closestEvent: null,
  events: [],
  setClosestEvent:(closestEvent: IClosestEvent) => set(() => ({ closestEvent })),
  setEvents:(events: ((Meetup | Network) & {id: number})[]) => set(() => ({ events }))
}));

export default useStore;
