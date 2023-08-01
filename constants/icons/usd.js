import React from "react"
import { Path, Svg } from "react-native-svg"

const Usd = ({size, color = 'green', stroke}) => {
    return (    
    <Svg width={size || "48"} height={size || "48"} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M36.4821 31.7411C36.4821 34.4732 35.5938 36.8259 33.817 38.7991C32.0402 40.7723 29.7321 41.9911 26.8929 42.4554V47.1429C26.8929 47.3929 26.8125 47.5982 26.6518 47.7589C26.4911 47.9196 26.2857 48 26.0357 48H22.4196C22.1875 48 21.9866 47.9152 21.817 47.7455C21.6473 47.5759 21.5625 47.375 21.5625 47.1429V42.4554C20.3839 42.2946 19.2455 42.0179 18.1473 41.625C17.0491 41.2321 16.1429 40.8348 15.4286 40.433C14.7143 40.0313 14.0536 39.6027 13.4464 39.1473C12.8393 38.692 12.4241 38.3571 12.2009 38.1429C11.9777 37.9286 11.8214 37.7679 11.7321 37.6607C11.4286 37.2857 11.4107 36.9196 11.6786 36.5625L14.4375 32.9464C14.5625 32.7679 14.7679 32.6607 15.0536 32.625C15.3214 32.5893 15.5357 32.6696 15.6964 32.8661L15.75 32.9196C17.7679 34.6875 19.9375 35.8036 22.2589 36.2679C22.9196 36.4107 23.5804 36.4821 24.2411 36.4821C25.6875 36.4821 26.9598 36.0982 28.058 35.3304C29.1563 34.5625 29.7054 33.4732 29.7054 32.0625C29.7054 31.5625 29.5714 31.0893 29.3036 30.6429C29.0357 30.1964 28.7366 29.8214 28.4063 29.5179C28.0759 29.2143 27.5536 28.8795 26.8393 28.5134C26.125 28.1473 25.5357 27.8616 25.0714 27.6563C24.6071 27.4509 23.8929 27.1607 22.9286 26.7857C22.2321 26.5 21.683 26.2768 21.2813 26.1161C20.8795 25.9554 20.3304 25.7188 19.6339 25.4063C18.9375 25.0938 18.3795 24.817 17.9598 24.5759C17.5402 24.3348 17.0357 24.0179 16.4464 23.625C15.8571 23.2321 15.3795 22.8527 15.0134 22.4866C14.6473 22.1205 14.2589 21.683 13.8482 21.1741C13.4375 20.6652 13.1205 20.1473 12.8973 19.6205C12.6741 19.0938 12.4866 18.5 12.3348 17.8393C12.183 17.1786 12.1071 16.4821 12.1071 15.75C12.1071 13.2857 12.9821 11.125 14.7321 9.26786C16.4821 7.41071 18.7589 6.21429 21.5625 5.67857V0.857143C21.5625 0.625 21.6473 0.424107 21.817 0.254464C21.9866 0.0848214 22.1875 0 22.4196 0H26.0357C26.2857 0 26.4911 0.0803571 26.6518 0.241071C26.8125 0.401786 26.8929 0.607143 26.8929 0.857143V5.57143C27.9107 5.67857 28.8973 5.88393 29.8527 6.1875C30.808 6.49107 31.5848 6.79018 32.183 7.08482C32.7813 7.37946 33.3482 7.71429 33.8839 8.08929C34.4196 8.46429 34.7679 8.72321 34.9286 8.86607C35.0893 9.00893 35.2232 9.13393 35.3304 9.24107C35.6339 9.5625 35.6786 9.90179 35.4643 10.2589L33.2946 14.1696C33.1518 14.4375 32.9464 14.5804 32.6786 14.5982C32.4286 14.6518 32.1875 14.5893 31.9554 14.4107C31.9018 14.3571 31.7723 14.25 31.567 14.0893C31.3616 13.9286 31.0134 13.692 30.5223 13.3795C30.0313 13.067 29.5089 12.7813 28.9554 12.5223C28.4018 12.2634 27.7366 12.0313 26.9598 11.8259C26.183 11.6205 25.4196 11.5179 24.6696 11.5179C22.9732 11.5179 21.5893 11.9018 20.5179 12.6696C19.4464 13.4375 18.9107 14.4286 18.9107 15.6429C18.9107 16.1071 18.9866 16.5357 19.1384 16.9286C19.2902 17.3214 19.5536 17.692 19.9286 18.0402C20.3036 18.3884 20.6563 18.683 20.9866 18.9241C21.317 19.1652 21.817 19.442 22.4866 19.7545C23.1563 20.067 23.6964 20.308 24.1071 20.4777C24.5179 20.6473 25.1429 20.8929 25.9821 21.2143C26.9286 21.5714 27.6518 21.8527 28.1518 22.058C28.6518 22.2634 29.3304 22.5759 30.1875 22.9955C31.0446 23.4152 31.7188 23.7946 32.2098 24.1339C32.7009 24.4732 33.2545 24.9196 33.8705 25.4732C34.4866 26.0268 34.9598 26.5938 35.2902 27.1741C35.6205 27.7545 35.9018 28.4375 36.1339 29.2232C36.3661 30.0089 36.4821 30.8482 36.4821 31.7411Z" 
        stroke={stroke || color} strokeWidth="1" 
        fill={color}/>
    </Svg>
    )
    
}

export default Usd;



