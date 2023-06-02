import { Scale } from "tonal";
import { createWindow } from "../../../utils/window";

function init($parent, applicationState, set) {
  createWindow({
    $parent,
    klass: "top-1/2 left-1/2",
    title: "Sequencer",
    body: [
      {
        type: "ul",
        class: "flex flex-row gap-2",
        children: Array.from(new Array(10), (_, i) => i).map((x) => ({
          type: "li",
          children: [
            {
              type: "ul",
              class: "flex flex-col gap-2",
              children: Scale.get("C major").notes.map((key, y) => ({
                type: "li",
                children: [
                  {
                    type: "button",
                    class: "bg-slate-200 w-6 h-6",
                    // TODO: Figure out toggling via a data attribute or so
                    // if this will be a controlled component.
                    children: key,
                    attributes: {
                      onclick() {
                        set("sequence", { x, y });
                      },
                    },
                  },
                ],
              })),
            },
          ],
        })),
      },
    ],
  });
}

export { init };