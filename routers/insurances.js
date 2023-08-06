const express = require('express');

const router = express.Router();

const Insurance = require('../model/insurance')
router.get('/',async(req,res)=>{
   try{
   const insurances = await Insurance.find();
   res.json(insurances);
   }catch(error){
    res.send('Error',+err);
   }
})


router.get('/:id',async(req,res)=>{
    try{
    const insurance = await Insurance.findById(req.params.id);
    res.json(insurance);
    }catch(error){
     res.send('Error',+error);
    }
 })

router.post('/',async(req,res)=>{
const insurance = new Insurance({
    agent:req.body.agent,
    userType:req.body.userType,
    policy_mode:req.body.policy_mode,
    producer:req.body.producer,
    policy_number:req.body.policy_number,
    premium_amount:req.body.premium_amount,
    policy_type:req.body.policy_type,
    company_name:req.body.company_name,
    category_name:req.body.category_name,
    policy_start_date:req.body.policy_start_date,
    policy_end_date:req.body.policy_end_date,
    csr:req.body.csr,
    account_name:req.body.account_name,
    email:req.body.email,
    gender:req.body.gender,
    firstname:req.body.firstname,
    city:req.body.city,
    account_type:req.body.account_type,
    phone:req.body.phone,
    address:req.body.address,
    state:req.body.state,
    zip:req.body.zip,
    dob:req.body.dob
})
try{
const a1 = await insurance.save()
res.json(a1)
}catch(error){
    res.send('Error')
}
})

router.patch('/:id',async(req,res)=>{
try{
    const insurance = await Insurance.findById(req.params.id);
    insurance.agent =req.body.agent,
    insurance.userType=req.body.userType,
    insurance.policy_mode=req.body.policy_mode,
    insurance.producer=req.body.producer,
    insurance.policy_number=req.body.policy_number,
    insurance.premium_amount=req.body.premium_amount,
    insurance.policy_type=req.body.policy_type,
    insurance.company_name=req.body.company_name,
    insurance.category_name=req.body.category_name,
    insurance.policy_start_date=req.body.policy_start_date,
    insurance.policy_end_date=req.body.policy_end_date,
    insurance.csr=req.body.csr,
    insurance.account_name=req.body.account_name,
    insurance.email=req.body.email,
    insurance.gender=req.body.gender,
    insurance.firstname=req.body.firstname,
    insurance.city=req.body.city,
    insurance.account_type=req.body.account_type,
    insurance.phone=req.body.phone,
    insurance.address=req.body.address,
    insurance.state=req.body.state,
    insurance.zip=req.body.zip,
    insurance.dob=req.body.dob
    const a1 = await insurance.save()
    res.json(a1)
}catch(err){
    res.send('Error')
}
})

router.delete('/:id',async(req,res)=>{
    try{
        const insurance = await Insurance.findById(req.params.id);
        insurance.agent =req.body.agent,
    insurance.userType=req.body.userType,
    insurance.policy_mode=req.body.policy_mode,
    insurance.producer=req.body.producer,
    insurance.policy_number=req.body.policy_number,
    insurance.premium_amount=req.body.premium_amount,
    insurance.policy_type=req.body.policy_type,
    insurance.company_name=req.body.company_name,
    insurance.category_name=req.body.category_name,
    insurance.policy_start_date=req.body.policy_start_date,
    insurance.policy_end_date=req.body.policy_end_date,
    insurance.csr=req.body.csr,
    insurance.account_name=req.body.account_name,
    insurance.email=req.body.email,
    insurance.gender=req.body.gender,
    insurance.firstname=req.body.firstname,
    insurance.city=req.body.city,
    insurance.account_type=req.body.account_type,
    insurance.phone=req.body.phone,
    insurance.address=req.body.address,
    insurance.state=req.body.state,
    insurance.zip=req.body.zip,
    insurance.dob=req.body.dob
        const a1 = await insurance.deleteOne()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
    })
module.exports = router;