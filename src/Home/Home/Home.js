import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Services from '../Services/Services';
import UserReview from '../UserReview/UserReview';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <Services></Services>
            <UserReview></UserReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;