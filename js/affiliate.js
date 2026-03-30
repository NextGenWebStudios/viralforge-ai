export function generateAffiliateCode(user){ return user.toUpperCase()+"-VFAI"; }
export function trackReferral(code){ console.log("Referral tracked:",code); }
