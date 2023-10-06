import {useState} from 'react'
import {styles} from "../util/genral-style.js";
import contact from '../assets/contact.png'
import CallToAction from "../components/shared/CallToAction.jsx";
import {BiRightArrowAlt} from  'react-icons/bi'
import {useFormik} from 'formik'
import emailjs from '@emailjs/browser'
import Notification from "../components/shared/Notification.jsx";


const validate = (values) => {
    const errors = {};
    if (!values.name) {
        errors.name = "Required";
    }

    if (!values.email) {
        errors.email = "Required";
    }

    if (!values.message) {
        errors.message = "Required";
    }
    return errors;
};



    const Contact = () => {


    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false)
    const [type,setType] = useState('success')
    const [title,setTitle] = useState('Success')




        const updateStateFunctions=(title,type)=>{
            setTitle(title)
            setType(type)
        }

        const formik = useFormik({
        initialValues:{
            name:"",
            email:"",
            message:""
        },
        validate,
        onSubmit:(values,onReset)=>{
            setLoading(true);

            emailjs
                .send(
                    import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                    import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                    {
                        from_name: values.name,
                        to_name: "Orralearn ",
                        from_email: values.email,
                        to_email: "teamorralearn@gmail.com",
                        message: values.message,
                    },
                    import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
                )
                .then(
                    () => {
                        setLoading(false);
                        setShow(true)
                        updateStateFunctions('Success','success')

                        onReset.resetForm({
                            name: "",
                            email: "",
                            message: "",
                        });
                    },
                    (error) => {
                        setLoading(false);
                        updateStateFunctions('An error occured','error')
                        setShow(true)
                        console.error(error);

                    }
                );
        }
    })


  return (
      <>
          <Notification show={show} setShow={setShow} title={title} type={type}/>
    <div className={` generalNavPadding bgOne ${styles.paddingX} font-openSans ${styles.homePageGenPadding} font-openSans flex flex-col gap-y-20`}>
        <div className={'grid grid-cols-1 md:grid-cols-2 mb-20'}>
      <div className={'w-full  flex flex-col gap-y-4 '}>
        <h6 className={`${styles.homeHeadingStyle} `}>CONTACT US</h6>
        <p className={' text-4xl sm:text-5xl sm:leading-[61px] lg:text-6xl lg:leading-[61px] font-bold'}>We’d love to hear <br/>from you!.</p>
        <p className={'text-[#555] text-lg'}>Got a question? contact us  to learn more.</p>
          <div className={'flex '}>
              <img src={contact} alt={'contact'} className={'w-full md:w-[300px] h-72 object-contain'}/>
          </div>

      </div>
      <form
          onSubmit={formik.handleSubmit}
          className={'w-full bg-white rounded-lg p-8 flex flex-col gap-8'}>
          <div className={'w-full flex flex-col md:flex-row gap-5'}>
          <label htmlFor={'name'} className={'md:w-1/2 flex flex-col gap-y-4'}>
              <p className={'font-semibold'}>Name</p>
              <input
                  id={'name'}
                     name={'name'}
                     className={'inputStyle'}
                     placeholder={'Enter name'}
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}/>
              {formik.errors.name && formik.touched.name ? (
                  <p className="text-red-500 mb-0 mt-1">{formik.errors.name}</p>
              ) : null}
          </label>
              <label htmlFor={'email'} className={'md:w-1/2 flex flex-col gap-y-4'}>
              <p className={'font-semibold'}>Email</p>
              <input
                  id={'email'}
                  name={'email'}
                  className={'inputStyle'}
                  placeholder={'Enter email'}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}/>
                  {formik.errors.email && formik.touched.email ? (
                      <p className="text-red-500 mb-0 mt-1">{formik.errors.email}</p>
                  ) : null}
          </label>

          </div>
          <label htmlFor={''} className={'flex flex-col gap-y-4'}>
              <p className={'font-semibold'}>Message</p>
              <textarea
                  id={'message'}
                  name={'message'}
                  className={'inputStyle h-40'}
                  placeholder={'Type your message here...'}
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}/>
              {formik.errors.message && formik.touched.message ? (
                  <p className="text-red-500 mb-0 mt-1">{formik.errors.message}</p>
              ) : null}
          </label>
          <button type={"submit"} className={`${styles.buttonStyle} w-[210px] flex items-center gap-2`}>
              <span>{loading ?"loading...":"Send message"}</span>
              <BiRightArrowAlt/>
          </button>
      </form>
        </div>

        <CallToAction/>
    </div>
      </>
  )
}

export default Contact