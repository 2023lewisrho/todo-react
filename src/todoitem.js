function TodoItem(name) {
    function innerGenFn(name) {
        this.name = name;
        this.checked = false;    
    }

    function getSortFunction() {
        return function(todo1, todo2) {
            if (todo1.checked && !todo2.checked) {
                return todo1;
            } else if (!todo1.checked && todo2.checked) {
                return todo2;
            } else {
                return todo1.name > todo2.name ? todo1 : todo2;
            }
        }
    }

    return new innerGenFn(name);
}

export {TodoItem};