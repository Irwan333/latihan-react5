import React, {Component} from 'react';
import Blogs from '../Blogs/Blogs';
import Blogsb from '../Blogs/BlogsBawah';

class Props extends Component {
    render() { 
        return ( 
            <div className="propwraper" >
                <Blogs img={require('../../../gambar/indi2.jpg')} date="12 september 2019" heading="Kini indihome hadir di sumedang" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos vel distinctio culpa ea minus temporibus aliquid consequuntur totam voluptatem? " />

                <Blogs img={require('../../../gambar/indi3.jpg')} date="12 september 2019" heading="Kini indihome hadir di sumedang" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos vel distinctio culpa ea minus temporibus aliquid consequuntur totam voluptatem? " />

                {/*  */}
                <Blogsb img={require('../../../gambar/indi3.jpg')} date="12 september 2019" heading="Kini indihome hadir di sumedang" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos vel distinctio culpa ea minus temporibus aliquid consequuntur totam voluptatem? " />
                <Blogsb img={require('../../../gambar/indi4.jpg')} date="12 september 2019" heading="Kini indihome hadir di sumedang" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos vel distinctio culpa ea minus temporibus aliquid consequuntur totam voluptatem? " />
                <Blogsb img={require('../../../gambar/indi5.jpg')} date="12 september 2019" heading="Kini indihome hadir di sumedang" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos vel distinctio culpa ea minus temporibus aliquid consequuntur totam voluptatem? " />
                <Blogsb img={require('../../../gambar/indi3.jpg')} date="12 september 2019" heading="Kini indihome hadir di sumedang" des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos vel distinctio culpa ea minus temporibus aliquid consequuntur totam voluptatem? " />                
            </div>
         );
    }
}
 
export default Props;

