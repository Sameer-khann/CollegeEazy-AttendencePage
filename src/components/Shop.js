import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import tasveer from '../img/shop5.png';
import deleteIcon from '../img/deleteIcon (1).png';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Image } from 'cloudinary-react';
import { toast } from 'react-toastify';

import Swal from 'sweetalert2';




const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    enrollment: yup.string().min(3).max(11).required('Enrollment is required'),
    title: yup.string().required('Title is required'),
    category: yup.string().required('Category is required'),
    description: yup.string().required('Description is required'),
    price: yup.string().max(5).required('Price is required'),
    contact: yup.string().max(10).required('Contact is required'),
});

const FormComponent = (props) => {


    const [addData, setAddData] = useState([]);
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);


    // console.log(image,"img url cloud")


    const formik = useFormik({
        initialValues: {
            name: '',
            enrollment: '',
            title: '',
            category: '',
            description: '',
            price: '',
            contact: '',
        },

        validationSchema: validationSchema,



        onSubmit: (values) => {

            setAddData(values)

            console.log('Form values on submit:', values);
            console.log(addData, "this add data")
            // Handle form submission logic here

            props.onSubmit(values);

            // alert("succesfully submited");

            formik.resetForm();
            setImage('');
        },
    });



    const handleImageUpload = async (e) => {
        setLoading(true);
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'CollegeEazyItems'); // Replace with your upload preset

        const response = await fetch(
            'https://api.cloudinary.com/v1_1/dgviyqmaz/image/upload', // Replace with your cloud name
            {
                method: 'POST',
                body: formData,
            }
        );

        const data = await response.json();
        setImage(data.secure_url);
        formik.setFieldValue('path', data.secure_url);
        setLoading(false);

    };



    const handleInputChange = (event) => {

    };


    return (
        <div className="formAdd">
            <p style={{ color: "black" }}>Add items</p>
            <form onSubmit={formik.handleSubmit}>
                <input
                    type="text"
                    placeholder="name"
                    name="name"
                    value={formik.values.name}
                    onChange={(e) => {
                        formik.handleChange(e);
                        handleInputChange(e);
                    }}
                    onBlur={formik.handleBlur}
                />
                <div className='errorFormAdd'>{formik.touched.name && formik.errors.name}</div>
                <input
                    type="text"
                    placeholder="enrollment"
                    name="enrollment"
                    value={formik.values.enrollment}
                    onChange={(e) => {
                        formik.handleChange(e);
                        handleInputChange(e);
                    }}
                    onBlur={formik.handleBlur}
                />
                <div className='errorFormAdd'>{formik.touched.enrollment && formik.errors.enrollment}</div>
                <input
                    type="text"
                    placeholder="title"
                    name="title"
                    value={formik.values.title}
                    onChange={(e) => {
                        formik.handleChange(e);
                        handleInputChange(e);
                    }}
                    onBlur={formik.handleBlur}
                />
                <div className='errorFormAdd'>{formik.touched.title && formik.errors.title}</div>
                <input
                    type="text"
                    placeholder="category"
                    name="category"
                    value={formik.values.category}
                    onChange={(e) => {
                        formik.handleChange(e);
                        handleInputChange(e);
                    }}
                    onBlur={formik.handleBlur}
                />
                <div className='errorFormAdd'>{formik.touched.category && formik.errors.category}</div>
                <input
                    type="text"
                    placeholder="description"
                    name="description"
                    value={formik.values.description}
                    onChange={(e) => {
                        formik.handleChange(e);
                        handleInputChange(e);
                    }}
                    onBlur={formik.handleBlur}
                />
                <div className='errorFormAdd'>{formik.touched.description && formik.errors.description}</div>
                <input
                    type="text"
                    placeholder="price"
                    name="price"
                    value={formik.values.price}
                    onChange={(e) => {
                        formik.handleChange(e);
                        handleInputChange(e);
                    }}
                    onBlur={formik.handleBlur}
                />
                <div className='errorFormAdd'>{formik.touched.price && formik.errors.price}</div>
                <input
                    type="text"
                    placeholder="contact"
                    name="contact"
                    value={formik.values.contact}
                    onChange={(e) => {
                        formik.handleChange(e);
                        handleInputChange(e);
                    }}
                    onBlur={formik.handleBlur}
                />
                <div className='errorFormAdd'>{formik.touched.contact && formik.errors.contact}</div>

                <div className='imgUploadinput'>
                    <input className='imgUpload' type="file" onChange={handleImageUpload} style={{ border: "none", boxShadow: "none" }} />
                    {loading ? (
                        <h6 style={{ color: "black" }}>Uploading...</h6>
                    ) : (
                        image && <Image cloudName="your_cloud_name" publicId={image} width="50px" />
                    )}
                </div>


                <div className="ShopButton">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};




export default function Shop() {






    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('BOOKS');
    const [toggleCheckbox, setToggleCheckbox] = useState(false);



    const Shoptoken = JSON.parse(localStorage.getItem("Token"))


    const getDataApiCall = async () => {
        try {
            const response = await axios.get('https://collegeeazy-backend-production.up.railway.app/collegeazy/store/private/', {
                headers: {
                    Authorization: `Bearer ${Shoptoken.jwt}`
                }
            });

            setPosts(response.data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };




    useEffect(() => {
        getDataApiCall();
    },[]);



    if (error) {
        return <p>Error fetching data</p>;

    }



    // const cloudName = "dgviyqmaz";
    // const apiKey = "166985971954285";
    // const apiSecret = "MVTCOZSmHhnVIb4pGk_R6pYWTvA"








    const handleDeleteImage = async (itemId) => {
        const targetPost = posts.find(post => post.id === itemId);

        if (!targetPost) {
            console.log('Post not found.');
            return;
        }

        //https://res.cloudinary.com/da43ngvrf/image/upload/cld-sample-2.jpg

        const cloudinaryURL = targetPost.path;
        console.log(cloudinaryURL, "cloudinaryURL");

        const parts = cloudinaryURL.split('/');
        const publicIdWithExtension = parts[parts.length - 1];
        const publicId = publicIdWithExtension.split('.')[0];

        try {

            console.log(publicId, "publicId");

        } catch (error) {
            console.error('Error deleting image:', error);
        }
    };



    const handleFormSubmit = async (formData) => {

        console.log('Received form data:', formData);

        try {
            const response = await axios.post(
                'https://collegeeazy-backend-production.up.railway.app/collegeazy/store/private/addItem',
                {
                    category: formData.category,
                    description: formData.description,
                    enrollment: formData.enrollment,
                    path: formData.path,
                    name: formData.name,
                    price: formData.price,
                    contact: formData.contact,
                    title: formData.title
                },
                {
                    headers: {
                        Authorization: `Bearer ${Shoptoken.jwt}`
                    },
                }
            );

            console.log('Response from the server:', response.data);
            setToggleCheckbox(!toggleCheckbox);
            getDataApiCall();
            toast.success("Successfully Submitted", {
                position: "top-center",
            });

        } catch (error) {
            toast.error('Failed to add item:', error);
        }
    };



    const handleDelete = async (itemId) => {

        handleDeleteImage(itemId);


        try {
            axios.delete(`https://collegeeazy-backend-production.up.railway.app/collegeazy/store/private/removeItem/${itemId}`, {
                headers: {
                    Authorization: `Bearer ${Shoptoken.jwt}`
                },
            })

            console.log('Item deleted successfully');

            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'

            ).then(() => {
                getDataApiCall();
            });

        } catch (error) {
            console.error('Error deleting item:', error);
            Swal.fire(
                'Error',
                'An error occurred while deleting the item.',
                'error'
            );
        }

    };






    return (
        <>
            <div className='page4'>
                <Navbar />
                <div className="containershop">
                    <div className="tasveerShop">
                        <img src={tasveer} alt="" />
                    </div>
                    <div className="headtextShop">
                        <h1> {'['} Store Eazy {' ]'}</h1>
                        <span>We are here to provide the best Notes for all semesters and all branches</span>
                        <div className="dropdownS">
                            <label>
                                <select id='Branch' name='Branch' value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
                                    <option style={{ color: 'blue' }}>CATEGORY</option>
                                    <option value="BOOKS">BOOKS</option>
                                    <option value="STATIONERY">STATIIONERY</option>
                                    <option value="TOOLS">TOOLS</option>
                                </select>
                            </label>
                        </div>
                        <div className="containerShopAdd">
                            <input type="checkbox" id="toggleCheckbox" checked={toggleCheckbox} onChange={() => setToggleCheckbox(!toggleCheckbox)} className="toggle-checkbox" />
                            <div className="ADDBTushop">
                                <label htmlFor="toggleCheckbox" className="toggle-label">
                                    Add items
                                </label>
                            </div>
                            <div className="Sidecard">
                                <div className="cardAdditem">
                                    <label htmlFor="toggleCheckbox" style={{ color: "black", cursor: "pointer", fontSize: "1.3rem", padding: "0", display: "flex" }} >
                                        ✘
                                    </label>
                                    <div className="formAdd">
                                        <FormComponent onSubmit={handleFormSubmit} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {(loading) ? (<p>Loading...</p>) : (
                    <>
                        <h1 style={{ padding: "20px 50px", margin: "0" }}>Items:</h1>
                        <div className="shopBox">
                            {posts.map(item => (
                                <div key={item.id} className="boxCardShop" >


                                    <div style={{ paddingLeft: "90%" }}>
                                        {item.enrollment === Shoptoken.enrollment && (

                                            <div
                                                type="button"
                                                onClick={() => {
                                                    const swalWithBootstrapButtons = Swal.mixin({
                                                        customClass: {
                                                            confirmButton: 'btn btn-success',
                                                            cancelButton: 'btn btn-danger',
                                                            actions: 'd-flex gap-4',
                                                        },
                                                        buttonsStyling: false
                                                    });

                                                    swalWithBootstrapButtons.fire({
                                                        title: 'Are you sure?',
                                                        text: "You won't be able to revert this!",
                                                        icon: 'warning',
                                                        showCancelButton: true,
                                                        confirmButtonText: 'Yes, delete it! ',
                                                        cancelButtonText: 'No, cancel!',
                                                        reverseButtons: true,
                                                    }).then((result) => {
                                                        if (result.isConfirmed) {
                                                            handleDelete(item.id);
                                                        }
                                                    });
                                                }}
                                            >
                                                <img src={deleteIcon} alt="" style={{ width: "70%" }} onClick={() => console.log(item.id, "this is id item")} />
                                            </div>

                                        )}
                                    </div>



                                    <div className="ShopImg">
                                        <img src={item.path} alt="img" />
                                    </div>
                                    <hr />
                                    <div className='shopBotPortion'>
                                        <h4>{item.title.slice(0, 30)}...</h4>
                                        <p>{item.description.slice(0, 30)}</p>
                                        <div className="ShopButton">
                                            <Link
                                                style={{ textDecoration: "none" }}
                                                to={`/shop/${item.id}`}
                                                state={{ data: item }}
                                            >
                                                <button>Shop Now</button>
                                            </Link>

                                            <p>
                                                Special price : <br />
                                                <h3>₹{item.price}</h3>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>

                )}

            </div>
        </>
    );
}

