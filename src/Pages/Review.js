import React, { useState } from 'react';
import './Review.css';
import { Link } from 'react-router-dom';
import logo from "../TechHavenLogo.png";


const ReviewPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    productQualityRating: '',
    knowledgeRating: '',
    customerServiceRating: '',
    deliverySpeedRating: '',
    returnPolicyRating: '',
    websiteExperienceRating: '',
    overallSatisfactionRating: '',
    likelihoodToRecommendRating: '',
    additionalFeedback: ''
  });
  
  const [nameError, setNameError] = useState('');
  const [ratingError, setRatingError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const validateName = (name) => {
    const regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    return regex.test(name);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateName(formData.name)) {
      setNameError('Please enter a valid name.');
      return;
    }

    if (!formData.productQualityRating || !formData.knowledgeGainedRating || !formData.customerServiceRating || !formData.deliverySpeedRating || !formData.returnPolicyRating || !formData.websiteExperienceRating || !formData.overallSatisfactionRating || !formData.likelihoodRecommendRating) {
      setRatingError(true);
      return;
    }

    // Continue with form submission if validation passes
    console.log(formData);
    setSubmitted(true);
  }

  return (
    <div>
      <div className="header">
        <div id='img'><Link to="/"><img src={logo} alt="Tech Heaven Logo" className="logo" /></Link></div>
      </div>
      {submitted && (
        <div className="overlay">
          <div className="message-box">
            <p>Thank you for your review!</p>
          </div>
        </div>)}
        <div className="review-page">
          
          <div className="review-container">
            <h1>Electronic Store Review</h1>
            <div className="form-wrapper">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                  {nameError && <p className="error-message">{nameError}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="form-group">
                <label>Rate the Product Quality:</label>
                  <div id='Block'>
                  <div className="radio-container">
                    <input
                      type="radio"
                      id="product-quality-very-poor"
                      name="productQualityRating"
                      value="Very Poor"
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="product-quality-very-poor">Very Poor</label>
                  </div >
                  <div className="radio-container">
                    <input
                      type="radio"
                      id="product-quality-poor"
                      name="productQualityRating"
                      value="Poor"
                      onChange={handleChange}
                    />
                    <label htmlFor="product-quality-poor">Poor</label>
                  </div>
                  <div className="radio-container">
                    <input
                      type="radio"
                      id="product-quality-average"
                      name="productQualityRating"
                      value="Average"
                      onChange={handleChange}
                    />
                    <label htmlFor="product-quality-average">Average</label>
                  </div>
                  <div className="radio-container">
                    <input
                      type="radio"
                      id="product-quality-good"
                      name="productQualityRating"
                      value="Good"
                      onChange={handleChange}
                    />
                    <label htmlFor="product-quality-good">Good</label>
                  </div>
                  <div className="radio-container">
                    <input
                      type="radio"
                      id="product-quality-excellent"
                      name="productQualityRating"
                      value="Excellent"
                      onChange={handleChange}
                    />
                    <label htmlFor="product-quality-excellent">Excellent</label>
                  </div>
                  </div>
                </div>

                <div className="form-group">
                  <label>Rate the Knowledge Gained:</label>
                  <div id='Block'>
                  <div className="radio-container">
                    <input type="radio" id="knowledge-gained-very-poor" name="knowledgeGainedRating" value="Very Poor" onChange={handleChange} required />
                    <label htmlFor="knowledge-gained-very-poor">Very Poor</label>
                  </div>
                  <div className="radio-container">
                    <input type="radio" id="knowledge-gained-poor" name="knowledgeGainedRating" value="Poor" onChange={handleChange} />
                    <label htmlFor="knowledge-gained-poor">Poor</label>
                  </div >
                  <div className="radio-container">
                    <input type="radio" id="knowledge-gained-average" name="knowledgeGainedRating" value="Average" onChange={handleChange} />
                    <label htmlFor="knowledge-gained-average">Average</label>
                  </div>
                  <div className="radio-container">
                    <input type="radio" id="knowledge-gained-good" name="knowledgeGainedRating" value="Good" onChange={handleChange} />
                    <label htmlFor="knowledge-gained-good">Good</label>
                  </div>
                  <div className="radio-container">
                    <input type="radio" id="knowledge-gained-excellent" name="knowledgeGainedRating" value="Excellent" onChange={handleChange} />
                    <label htmlFor="knowledge-gained-excellent">Excellent</label>
                  </div>
                  </div>
                </div>

                <div className="form-group">
                  <label>Rate the Customer Service:</label>
                  <div id='Block'>
                  <div className="radio-container"> 
                    <input type="radio" id="customer-service-very-poor" name="customerServiceRating" value="Very Poor" onChange={handleChange} required />
                    <label htmlFor="customer-service-very-poor">Very Poor</label>
                  </div>
                  <div className="radio-container">
                    <input type="radio" id="customer-service-poor" name="customerServiceRating" value="Poor" onChange={handleChange} />
                    <label htmlFor="customer-service-poor">Poor</label>
                  </div>
                  <div className="radio-container">
                    <input type="radio" id="customer-service-average" name="customerServiceRating" value="Average" onChange={handleChange} />
                    <label htmlFor="customer-service-average">Average</label>
                  </div>
                  <div className="radio-container">
                    <input type="radio" id="customer-service-good" name="customerServiceRating" value="Good" onChange={handleChange} />
                    <label htmlFor="customer-service-good">Good</label>
                  </div>
                  <div className="radio-container">
                    <input type="radio" id="customer-service-excellent" name="customerServiceRating" value="Excellent" onChange={handleChange} />
                    <label htmlFor="customer-service-excellent">Excellent</label>
                  </div>
                  </div>
                </div>

                <div className="form-group">
                  <label>Rate the Delivery Speed:</label>
                  <div id='Block'>
                  <div className="radio-container">
                    <input type="radio" id="delivery-speed-very-poor" name="deliverySpeedRating" value="Very Poor" onChange={handleChange} required />
                    <label htmlFor="delivery-speed-very-poor">Very Poor</label>
                  </div >
                  <div className="radio-container">
                    <input type="radio" id="delivery-speed-poor" name="deliverySpeedRating" value="Poor" onChange={handleChange} />
                    <label htmlFor="delivery-speed-poor">Poor</label>
                  </div>
                  <div className="radio-container">
                    <input type="radio" id="delivery-speed-average" name="deliverySpeedRating" value="Average" onChange={handleChange} />
                    <label htmlFor="delivery-speed-average">Average</label>
                  </div>
                  <div className="radio-container">
                    <input type="radio" id="delivery-speed-good" name="deliverySpeedRating" value="Good" onChange={handleChange} />
                    <label htmlFor="delivery-speed-good">Good</label>
                  </div>
                  <div className="radio-container">
                    <input type="radio" id="delivery-speed-excellent" name="deliverySpeedRating" value="Excellent" onChange={handleChange} />
                    <label htmlFor="delivery-speed-excellent">Excellent</label>
                  </div>
                  </div>
                  
                </div>

                <div className="form-group">
                  <label>Rate the Return Policy:</label>
                  <div id='Block'>
                  <div className="radio-container">
                    <input type="radio" id="return-policy-very-poor" name="returnPolicyRating" value="Very Poor" onChange={handleChange} required />
                    <label htmlFor="return-policy-very-poor">Very Poor</label>
                  </div>
                  <div className="radio-container">
                    <input type="radio" id="return-policy-poor" name="returnPolicyRating" value="Poor" onChange={handleChange} />
                    <label htmlFor="return-policy-poor">Poor</label>
                  </div>
                  <div className="radio-container">
                    <input type="radio" id="return-policy-average" name="returnPolicyRating" value="Average" onChange={handleChange} />
                    <label htmlFor="return-policy-average">Average</label>
                  </div>
                  <div className="radio-container">
                    <input type="radio" id="return-policy-good" name="returnPolicyRating" value="Good" onChange={handleChange} />
                    <label htmlFor="return-policy-good">Good</label>
                  </div>
                  <div className="radio-container">
                    <input type="radio" id="return-policy-excellent" name="returnPolicyRating" value="Excellent" onChange={handleChange} />
                    <label htmlFor="return-policy-excellent">Excellent</label>
                  </div>
                  </div>
                </div>

                <div className="form-group">
                  <label>Rate the Website Experience:</label>
                  <div id='Block'>
                  <div className="radio-container">
                    <input type="radio" id="website-experience-very-poor" name="websiteExperienceRating" value="Very Poor" onChange={handleChange} required />
                    <label htmlFor="website-experience-very-poor">Very Poor</label>
                  </div>
                  <div className="radio-container">
                    <input type="radio" id="website-experience-poor" name="websiteExperienceRating" value="Poor" onChange={handleChange} />
                    <label htmlFor="website-experience-poor">Poor</label>
                  </div>
                  <div className="radio-container">
                    <input type="radio" id="website-experience-average" name="websiteExperienceRating" value="Average" onChange={handleChange} />
                    <label htmlFor="website-experience-average">Average</label>
                  </div>
                  <div className="radio-container">
                    <input type="radio" id="website-experience-good" name="websiteExperienceRating" value="Good" onChange={handleChange} />
                    <label htmlFor="website-experience-good">Good</label>
                  </div>
                  <div className="radio-container">
                    <input type="radio" id="website-experience-excellent" name="websiteExperienceRating" value="Excellent" onChange={handleChange} />
                    <label htmlFor="website-experience-excellent">Excellent</label>
                  </div>
                  </div>
                  
                </div>  

                <div className="form-group">
                  <label>Rate Overall Satisfaction:</label>
                  <div id='Block'>
                  <div className="radio-container">
                    <input type="radio" id="overall-satisfaction-very-poor" name="overallSatisfactionRating" value="Very Poor" onChange={handleChange} required />
                    <label htmlFor="overall-satisfaction-very-poor">Very Poor</label>
                  </div>
                  <div className="radio-container">
                    <input type="radio" id="overall-satisfaction-poor" name="overallSatisfactionRating" value="Poor" onChange={handleChange} />
                    <label htmlFor="overall-satisfaction-poor">Poor</label>
                  </div>
                  <div className="radio-container">
                    <input type="radio" id="overall-satisfaction-average" name="overallSatisfactionRating" value="Average" onChange={handleChange} />
                    <label htmlFor="overall-satisfaction-average">Average</label>
                  </div>
                  <div className="radio-container">
                    <input type="radio" id="overall-satisfaction-good" name="overallSatisfactionRating" value="Good" onChange={handleChange} />
                    <label htmlFor="overall-satisfaction-good">Good</label>
                  </div>
                  <div className="radio-container">
                    <input type="radio" id="overall-satisfaction-excellent" name="overallSatisfactionRating" value="Excellent" onChange={handleChange} />
                    <label htmlFor="overall-satisfaction-excellent">Excellent</label>
                  </div>
                  </div>
                  
                </div>

                <div className="form-group">
                  <label>Likelihood to Recommend:</label>
                  <div id='Block'>
                  <div className="radio-container">
                    <input type="radio" id="likelihood-recommend-very-poor" name="likelihoodRecommendRating" value="Very Poor" onChange={handleChange} required />
                    <label htmlFor="likelihood-recommend-very-poor">Very Poor</label>
                  </div>
                  <div className="radio-container">
                    <input type="radio" id="likelihood-recommend-poor" name="likelihoodRecommendRating" value="Poor" onChange={handleChange} />
                    <label htmlFor="likelihood-recommend-poor">Poor</label>
                  </div>
                  <div className="radio-container">
                    <input type="radio" id="likelihood-recommend-average" name="likelihoodRecommendRating" value="Average" onChange={handleChange} />
                    <label htmlFor="likelihood-recommend-average">Average</label>
                  </div>
                  <div className="radio-container">
                    <input type="radio" id="likelihood-recommend-good" name="likelihoodRecommendRating" value="Good" onChange={handleChange} />
                    <label htmlFor="likelihood-recommend-good">Good</label>
                  </div>
                  <div className="radio-container">
                    <input type="radio" id="likelihood-recommend-excellent" name="likelihoodRecommendRating" value="Excellent" onChange={handleChange} />
                    <label htmlFor="likelihood-recommend-excellent">Excellent</label>
                  </div>
                  </div>
                  
                </div>

                <div className="form-group">
                  <label>Additional Feedback:</label>
                  <textarea
                    id="additionalFeedback"
                    name="additionalFeedback"
                    rows="5"
                    value={formData.additionalFeedback}
                    onChange={handleChange}
                    placeholder="Provide any additional feedback"
                  ></textarea>
                </div>

                {ratingError && <p className="error-message">Please select a rating for all categories.</p>}

                <button type="submit" className="submit-button">Submit Feedback</button>
              </form>
            </div>
          </div>
        </div>
    </div>
  );
}

export default ReviewPage;