
import Count from './Count';
import Button from './Button';


const Counter = ({ count, onIncrement, onDecrement }) => {

    return (

        <div className='flex p-4  flex-col items-center justify-center space-y-5 bg-white text-black rounded shadow'>
            <Count count={count} />
            <div className='flex space-x-3'>
                <Button handler={onIncrement}>Increment</Button>
                <Button type='danger' handler={onDecrement}>Decrement</Button>
            </div>


        </div>

    );
};

export default Counter; 