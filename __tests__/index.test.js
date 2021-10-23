import { shallow } from "enzyme";
import Index from '../pages/index';

describe('Test component : <Index/>', function () {
    it('Test load component  <Index/> correctly', () => {
        const c = shallow(<Index />);
        let txt = c.find('h3').text()
        expect(txt).toEqual("Load Jokes");
    });
});