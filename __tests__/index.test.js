import { shallow } from "enzyme";
import Index from '../pages/index';
import axios from 'axios';


const flushPromises = () => new Promise(setImmediate);

jest.mock('axios');
global.flushPromises = () => new Promise(resolve => setImmediate(resolve))

describe('Test component : <Index/>', function () {
    let wrapper;
    beforeEach(() => {
        const data = { "categories": [], "created_at": "2020-01-05 13:42:25.905626", "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png", "id": "00mvxjN_QESXh2DIt4rs5A", "updated_at": "2020-01-05 13:42:25.905626", "url": "https://api.chucknorris.io/jokes/00mvxjN_QESXh2DIt4rs5A", "value": "Chuck Norris can have three pairs in his poker hand." }
        axios.get.mockImplementationOnce(() => new Promise(resolve => {
            resolve({data:data});
        }));

        wrapper = shallow(<Index />);
    });

    it('Test load component  <Index/> correctly', () => {
        expect(wrapper.find('h2').text()).toEqual("Jokes si Chuck Norris");
    });


    it('Test User Load Jokes by clicking button load jokes <Index/> correctly', async () => {

        expect(wrapper.find('h2').text()).toEqual("Jokes si Chuck Norris");
        expect(wrapper.find('button').at(0).text()).toEqual("Load Jokes")

        wrapper.find('button').at(0).simulate("click")

        await flushPromises();
        wrapper.update();

        expect(wrapper.find('h3').text()).toEqual("Chuck Norris can have three pairs in his poker hand.");
        expect(wrapper.find('button').at(0).text()).toEqual("Next Jokes")
    });


    it('Test User Clear Jokes by clicking button load jokes <Index/> correctly', async() => {
        wrapper.find('button').at(1).simulate("click")
        await flushPromises();
        wrapper.update();
        expect(wrapper.find('h3').text()).toEqual("");
        expect(wrapper.find('button').at(0).text()).toEqual("Load Jokes")
    });
});