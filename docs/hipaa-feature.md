---
id: hipaa-feature
title: HIPAA Support
sidebar_label: HIPAA Support
---

> **DISCLAIMER:** The <igia/> platform does <em>not</em> guarantee HIPAA compliance. It is up to each  developer to create and deploy applications that adhere to any applicable regulatory requirements like HIPAA.  Below are some suggested steps for configuring <igia/> with HIPAA in mind. These suggestions are not intended to be complete nor represented to be up to date. Users should refer to the latest standards provided by the [U.S. Department of Health & Human Services](https://www.hhs.gov/hipaa/for-professionals/index.html).
<br/>
<br/>Developers should have adequate test plans to confirm that all features required for HIPAA compliance, e.g., auditing/logging, function correctly within their specific deployment environment.

# <igia/> Platform and HIPAA

The Health Insurance Portability and Accountability Act of 1996 (HIPAA) is a US federal law that governs many aspects of health insurance portability and health data exchange. One component of the law, the Administrative Simplification portion (under Title II) is broken down into several rules, including the Privacy Rule and the Security Rule, which describe how we limit Protected Health Information (PHI) from a privacy and security perspective.

The [HHS.gov page for Professionals](https://www.hhs.gov/hipaa/for-professionals/index.html) has the standards for the HIPAA Privacy and Security Rules that need to be followed by covered entities and business associates. The Privacy Rule protects all _"individually identifiable health information"_ held or transmitted by a covered entity or its business associate, in any form or media, whether electronic, paper, or oral. The Security Rule requires covered entities to maintain reasonable and appropriate administrative, technical, and physical safeguards for protecting electronic PHI (ePHI). These restrictions do not apply to de-identified health information.

Any covered entity deploying the <igia/> platform is expected to follow the additional required administrative and technical standards defined in 45 C.F.R Part 164 not covered here (e.g., &sect; 164.308(a)(1)(ii)(B) Risk Management, &sect; 164.308(a)(1)(ii)(C) Sanction Policy, etc.). For completeness, please see the [Part 164 Standards Matrix (external download)](http://www.wedi.org/docs/publications/security-standards-matrix.pdf) outlining required and addressable standards.


## Risk Analysis (&sect; 164.308(a)(1)(ii)(A))

The Risk Analysis implementation specification requires covered entities to _"Conduct an accurate and thorough assessment of the potential risks and vulnerabilities to the confidentiality, integrity, and availability of electronic protected health information held by the covered entity."_

In order to fulfill the Risk Analysis HIPAA requirement, _**the <igia/> projects must undergo code scanning at defined intervals minimally before each release**_. While not a HIPAA requirement, we recommend penetration testing be performed against applications built using <igia/>.


## Technical Safeguards (&sect; 164.312)

The Security Rule defines technical safeguards in &sect; 164.304 as _"the technology and the policy and procedures for its use that protect electronic protected health information and control access to it."_


### ACCESS CONTROLS (&sect; 164.312(a)(1))

The Security Rule defines access in &sect; 164.304 as "the ability or the means necessary to read, write, modify, or communicate data/information or otherwise use any system resource. (This definition applies to "access" as used in this subpart, not as used in subpart E of this part [the HIPAA Privacy Rule])." Access controls provide users with rights and/or privileges to access and perform functions using information systems, applications, programs, or files. Access controls should enable authorized users to access the minimum necessary information needed to perform job functions.

The [Minimum Necessary Requirement](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/minimum-necessary-requirement/index.html) is meant to limit unnecessary or inappropriate access to and disclosure of protected health information.</span> The principle of least privilege needs to be applied to both the application and the PHI stored by the <igia/> platform. _**The <igia/> platform provides a feature for creating different roles associated with access privileges that can be assigned to users.**_


### UNIQUE USER IDENTIFICATION (Required) - (&sect; 164.312(a)(2)(i))

The Unique User Identification implementation specification states that a covered entity must: "Assign a unique name and/or number for identifying and tracking user identity."

_**The <igia/> application microgateway can integrate with a covered entity's authentication mechanisms (e.g., LDAP, Active Directory, SAML, etc.) to support unique user identification.**_ Associated with unique user identification is user activity monitoring. Any activity related to ePHI by a user needs to be written to an audit log.

_**Access control to microservices can be configured using the <igia/> microgateway.**_


### EMERGENCY ACCESS PROCEDURE (Required) - (&sect; 164.312(a)(2)(ii))

This implementation specification requires a covered entity to: _"Establish (and implement as needed) procedures for obtaining necessary electronic protected health information during an emergency."_

A covered entity needs to define emergency procedures covering applications built using <igia/> including limiting access just to administrative users. _**The <igia/> microgateway has the ability to allow for administrator access via a local user configured with an administrator role. We recommend users of <igia/> implement further safegaurds in the event of infrastructure outages.**_


### AUTOMATIC LOGOFF (Addressable) - (&sect; 164.312(a)(2)(iii))

Where this implementation specification is a reasonable and appropriate safeguard for a covered entity, the covered entity must: _"Implement electronic procedures that terminate an electronic session after a predetermined time of inactivity."_

_**Any application user interface built using <igia/> should have an automatic logoff procedure that complies with a covered entity's requirements.**_


### ENCRYPTION AND DECRYPTION (Addressable) - (&sect; 164.312(a)(2)(iv))

Where this implementation specification is a reasonable and appropriate safeguard for a covered entity, the covered entity must: _"Implement a mechanism to encrypt and decrypt electronic protected health information."_

PHI data at rest needs to be encrypted and retained following the covered entity's data retention requirements. There is no HIPAA data retention requirement, but each covered entity and business associate needs to minimally follow their jurisdiction's data retention requirements.

_**<igia/> does not provide a specific feature for encrypting data at rest, but application developers should configure data storage to support this requirement.**_

### AUDIT CONTROLS (&sect; 164.312(b))

The Audit Controls standard requires a covered entity to: "Implement hardware, software, and/or procedural mechanisms that record and examine activity in information systems that contain or use electronic protected health information."

_**Applications, including those implemented using <igia/>, must maintain audit logs for any activities related to ePHI.  The <igia/> microgateway provides a feature which can be configured for tracking PHI access via microgateway requests, storing the audit trail in a database.**_

#### For access to patient data stored in internal databases:

Existing audit standards include the IHE-ATNA Audit record definitions, originally from <a href="http://tools.ietf.org/html/rfc3881">RFC 3881</a>, and now managed by DICOM (see <a href="http://medical.nema.org/medical/dicom/current/output/html/part15.html#sect_A.5">DICOM Part 15 Annex A5</a>).

Additional info can be found in <a href="https://www.hl7.org/documentcenter/public/wg/secure/HL7_Security_Audit_Tutorial_20130505.ppt">HL7's Security and Audit Tutorial</a>.

<a href="http://www.astm.org/Standards/E2147.htm">ASTM E2147</a> &ndash; _Standard Specification for Audit and Disclosure Logs for Use in Health Information Systems_.
This is deprecated but contains a good summary of data considered standard for audit events.


>7. Audit Log Content<br />7.1 Audit log content is determined by regulatory initiatives, accreditation standards, and principles and organizational needs. Information is needed to adequately understand and oversee access to patient identifiable data in health information systems in order to perform security oversight tasks responsibly.<br />Logs must contain the following minimum data elements:<br />7.2 Date and Time of Event<br />7.3 Patient Identification<br />7.4 User Identification<br />7.5 Access Device (optional)<br />7.6 Type of Action (additions, deletions, changes, queries, print, copy)<br />7.7 Identification of the Patient Data that is Accessed(optional)<br />7.8 Source of Access (optional unless the log is combined from multiple systems or can be indisputably inferred)<br />7.9 Reason for Access (optional)<br />7.10 If capability exists, there should be recognition that both an electronic "copy" operation and a paper "print" operation are qualitatively different from other actions.

See <a href="http://build.fhir.org/auditevent.html">http://build.fhir.org/auditevent.html</a> for a data model.

### INTEGRITY (&sect; 164.312(c)(1))

The Integrity standard requires a covered entity to: "Implement policies and procedures to protect electronic protected health information from improper alteration or destruction."

### MECHANISM TO AUTHENTICATE ELECTRONIC PROTECTED HEALTH INFORMATION (Addressable) - (&sect; 164.312(c)(2))

Where this implementation specification is a reasonable and appropriate safeguard for a covered entity, the covered entity must: _"Implement electronic mechanisms to corroborate that electronic protected health information has not been altered or destroyed in an unauthorized manner."_

### PERSON OR ENTITY AUTHENTICATION (&sect; 164.312(d))

This standard requires a covered entity to: _"Implement procedures to verify that a person or entity seeking access to electronic protected health information is the one claimed."_

### TRANSMISSION SECURITY (&sect; 164.312(e)(1))

This standard requires a covered entity to: _"Implement technical security measures to guard against unauthorized access to electronic protected health information that is being transmitted over an electronic communications network."_

Any application built using <igia/> should encrypt data in transit containing ePHI and PII using secure encryption mechanisms.

### INTEGRITY CONTROLS (Addressable) - (&sect; 164.312(e)(2)(i))

Where this implementation specification is a reasonable and appropriate safeguard for a covered entity, the covered entity must: _"Implement security measures to ensure that electronically transmitted electronic protected health information is not improperly modified without detection until disposed of."_

### ENCRYPTION (Addressable) - (&sect; 164.312(e)(2)(ii))

Where this implementation specification is a reasonable and appropriate safeguard for a covered entity, the covered entity must: _<span>"Implement a mechanism to encrypt electronic protected health </span><span>informatio</span><span>n whenever deemed appropriate."</span>_

# External References

* [A look at HIPAA technical safeguard requirements](https://healthitsecurity.com/news/a-look-at-hipaa-technical-safeguard-requirements)
* [Guidance on Risk Analysis](https://www.hhs.gov/hipaa/for-professionals/security/guidance/guidance-risk-analysis/index.html)
* [NIST Cyber Security Framework to HIPAA Security Rule Crosswalk - PDF](https://www.hhs.gov/sites/default/files/nist-csf-to-hipaa-security-rule-crosswalk-02-22-2016-final.pdf)
* [Clarifying the HIPAA Retention Requirements](https://www.hipaajournal.com/hipaa-retention-requirements/)
