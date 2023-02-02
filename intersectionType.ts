//INTERSECTION TYPES(&) -> another method to combine types

type Draggable  = {
    drag : () => void
 };

type Resizable = {
    resize : () => void
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {},
}