import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    flex-direction: column;
    display: flex;
    align-items: center;
    text-align: center;
    img {
        margin-top: 5%;
        width: 150px;
        height: 155px;
        border-radius: 50%;
        animation: fade 1.2s;
    }
    header {
        color: #fff;
        font-family: 'Baloo Bhai', cursive;
        font-size: 3em;
        animation: fade 1.2s;
    }
    p {
        max-width: 75%;
        font-family: 'M PLUS Rounded 1c', sans-serif;
        color: #f5f5f5;
        font-size: 1.15em;
        animation: fade 1.2s;
    }
    a#button {
        margin-top: 5%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        width: 200px;
        height: 50px;
        background-color: #a7af5a;
        font-weight: bold;
        font-size: 25px;
        letter-spacing: 3px;
        color: rgba(39, 44, 89, 80%);
        animation: move 1.2s;
        :hover {
            background-color: rgb(167, 175, 60);
            color: rgba(39, 44, 89, 100%);
            border-radius: 10px;
            -webkit-transition: 0.3s ease-in;
            -moz-transition: 0.3s ease-in;
            -o-transition: 0.3s ease-in;
            transition: 0.3s ease-in;
        }
    }

    ul.icons {
        margin: 0;
        padding: 0;
        background: none;
        display: flex;
        align-self: flex-start;
        position: fixed;
        height: 100%;
        justify-content: center;
        flex-direction: column;
    }

    ul.icons li {
        background-color: #f5f5f5;
        width: 50px;
        height: 50px;
        font-size: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
    }
    ul.icons li#insta {
        background: radial-gradient(
                circle at 25% 110%,
                #fdf497 0,
                #fdf497 5%,
                #fd5949 45%,
                #d6249f 60%,
                #285aeb 90%
            ),
            radial-gradient(
                circle at 25% 110%,
                #b9a800 0,
                #938500 5%,
                #b10f00 45%,
                #8c0061 60%,
                #002ca9 90%
            );
    }
    ul.icons li#git {
        background-color: #4e545a;
    }

    ul.icons li#linke {
        background-color: #0077ba;
    }

    ul.icons li:hover {
        padding-left: 20px;
        -webkit-transition: 0.3s ease-in;
        -moz-transition: 0.3s ease-in;
        -o-transition: 0.3s ease-in;
        transition: 0.3s ease-in;
    }

    /*Animation*/

    @keyframes fade {
        from {
            opacity: 0;
            transform: scale(0.9);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    @keyframes move {
        from {
            opacity: 0;
            transform: translateX(-35%);
        }
        to {
            opacity: 1;
            transform: translateX(0%);
        }
    }

    /*squares*/

    .squares li {
        background-color: rgba(255, 255, 255, 0.15);
        display: block;
        position: absolute;
        bottom: -40px;
        animation: up 2s infinite;
        animation-direction: alternate;
    }

    @keyframes up {
        from {
            opacity: 0;
            transform: translateY(0);
        }
        50% {
            opacity: 1;
        }
        to {
            opacity: 0;
            transform: translateY(-900px) rotate(960deg);
        }
    }
`;
