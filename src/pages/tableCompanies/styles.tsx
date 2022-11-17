import styled from "styled-components";

import BannerImage from '../../assets/banner.png';

export const Container = styled.section`
    width:100%;
    height:100vh;
    display:flex;
    flex-direction:column;

    .filtersArea {
        height:35vh;
        background-image: url(${BannerImage});

        .titleTable {
            width:100%;
            height:75%;
            display:flex;
            justify-content:flex-end;
            align-items:center;

            h1 {
                margin-right:350px;
                font-size:80px;
                font-weight:700;
                color:#FFF;
            }
        }
        .filters {
            height:25%;
            padding:0 50px;
            display:flex;
            justify-content:flex-end;
            align-items:center;

            nav {

                
                ul {
                    list-style:none;
                    display:flex;

                    li, select, input {
                        padding:10px 40px;
                        background-color:#3D4E57;
                        color: #FFF;
                        border-radius:5px;
                        font-size:15px;
                        font-weight:400;
                        cursor:pointer;
                        outline:0;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                    }
                    li:not(li:last-child) {
                        margin-right:5px;
                    }
                    input, select {
                        margin-right:5px;
                    }
                }
            }
        }
    }
    .tableArea {
        min-height:65vh;
        height:auto;

        table {
            width:100%;

            thead {
                background-color:#0285BC;

                tr {
                    

                    th {
                        padding:2px;
                    }
                }
            }

            tbody {


                tr {


                    td {
                        padding:2px;
                    }
                }
                tr:nth-child(odd) {
                    background-color:#FFF;
                }
                tr:nth-child(even) {
                    background-color:#F3F3F3;
                }
            }
        }
    }
`; 