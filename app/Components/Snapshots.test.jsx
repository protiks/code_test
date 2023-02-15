import renderer from 'react-test-renderer'
import CustomList from "./CustomList"
import Home from "../page"
import CustomIcon from './CustomIcon'

const data = [{
    stuff: {
        liveUrl: 'string',
        logoLightUrl: 'string',
        description: 'string',
        companyNawame: 'string',
        companyId: 1,
        colorSettings: {
            brandColor: 'string'
        },
        events: [
            {
                pdfUrl: 'string',
                reportUrl: 'string'
            },
            {
                pdfUrl: 'string',
                reportUrl: 'string'
            }
        ]

    }
}]

describe('something', () => {

    it('renders Custom List', () => {
        const tree = renderer.create(<CustomList stuff={data} />).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('renders Home Component', () => {
        const tree = renderer.create(<Home />).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('renders Custom Icon', () => {
        const tree = renderer.create(<CustomIcon />).toJSON()
        expect(tree).toMatchSnapshot()
    })

})