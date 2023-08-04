import { Prettify } from "./07-prettify";

export type Event =
  | {
      type: "click";
      x: number;
      y: number;
    }
  | {
      type: "hover";
      element: HTMLElement;
    }
  | {
      type: "scroll";
      x: number;
      y: number;
    };

type EventType = Event["type"];
//    ^?

type EventAsObject = {
  [Member in Event as Member["type"]]: AddPrefixToEvent<Member>;
};

type AddPrefixToEvent<TEvent extends { type: string }> = Prettify<
  Omit<TEvent, "type"> & {
    type: `event:${TEvent["type"]}`;
  }
>;

// AFTER
type EventsWithPrefix = EventAsObject[EventType];

// BEFORE
// type EventWithPrefix = {
//   [Member in Event as Member["type"]]: Prettify<
//     Omit<Member, "type"> & {
//       type: `event:${Member["type"]}`;
//     }
//   >;
// }[Event["type"]];
