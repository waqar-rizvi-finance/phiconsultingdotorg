import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Card, message } from 'antd';
import { useParams, Navigate } from 'react-router-dom';
import axios from 'axios';

const EditHomePageCont = () => {
    const [form] = Form.useForm();
    const [redirectToShowHomePage, setRedirectToShowHomePage] = useState(false);
    const { homepageId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://prickle-balanced-archaeopteryx.glitch.me/homepage/${homepageId}`);
                form.setFieldsValue(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                message.error('An error occurred while fetching homepage data');
            }
        };

        fetchData();
    }, [homepageId, form]);

    const onFinish = async (values) => {
        try {
            await axios.put(`https://prickle-balanced-archaeopteryx.glitch.me/homepage/${homepageId}`, values);
            message.success('Homepage data updated successfully');
            setRedirectToShowHomePage(true);
        } catch (error) {
            console.error('Error updating homepage data:', error);
            message.error('An error occurred while updating homepage data');
        }
    };

    if (redirectToShowHomePage) {
        return <Navigate to="/dashboard/ShowHomePage" />;
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Card style={{ width: '60%' }}>
            <Form
         form={form}
         name="editHomepageContent"
         onFinish={onFinish}
         autoComplete="off"
         layout="vertical"
         style={{ width: '60%', margin: '0 auto' }}
        >
           <Form.Item name="heroheading" label="Hero Heading" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="herodescription" label="Hero Description" rules={[{ required: true }]}>
            <Input.TextArea />
          </Form.Item>
        
          <Form.Item name="clientheading" label="Client Heading" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="clientdescription" label="Client Description" rules={[{ required: true }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item name="valueheading" label="Value Heading" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="valuedescription" label="Value Description" rules={[{ required: true }]}>
            <Input.TextArea />
          </Form.Item>

          <Form.Item name="servicesheading" label="Services Heading" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="servicesDescription" label="Services Description" rules={[{ required: true }]}>
            <Input.TextArea />
          </Form.Item>

          <Form.Item name="casestudyheading" label="Case Study Heading" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="casestudyDescription" label="Case Study Description" rules={[{ required: true }]}>
            <Input.TextArea />
          </Form.Item>

          <Form.Item name="ctaheading" label="CTA Heading" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="ctadescription" label="CTA Description" rules={[{ required: true }]}>
            <Input.TextArea />
          </Form.Item>

          <Form.Item name="testiheading" label="Testimonial Heading" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="testidescription" label="Testimonial Description" rules={[{ required: true }]}>
            <Input.TextArea />
          </Form.Item>

          {/* Testimonials: names and designations */}
          <Form.Item name="testione" label="Testimonial One Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="testonedesignation" label="Testimonial One Designation" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="testitwo" label="Testimonial Two Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="testtwodesignation" label="Testimonial Two Designation" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="testithree" label="Testimonial Three Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="testthreedesignation" label="Testimonial Three Designation" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="insightsheading" label="Insights Heading" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="insightsdescription" label="Insights Description" rules={[{ required: true }]}>
            <Input.TextArea />
          </Form.Item>

          <Form.Item name="boardheading" label="Board Heading" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="boarddescription" label="Board Description" rules={[{ required: true }]}>
            <Input.TextArea />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
            </Card>
        </div>
    );
};

export default EditHomePageCont;
