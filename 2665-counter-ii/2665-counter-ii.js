/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let count = init;
    
    
        const increment = () => {
            return ++init;
        }
        
        const reset = () => {
            init = count;
            return init;
        }
        
        const decrement = () => {
            return --init;
        }
        
        return { increment, reset, decrement }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */