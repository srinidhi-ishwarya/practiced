import { Link, useNavigate, useParams } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import Input from "../components/Input";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import { formFields } from "../constant/validation";
import { useEffect, useState } from "react";

const Form = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [editLead, setEditLead] = useState(null);
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    const fetchLead = async () => {
      const leads = JSON.parse(localStorage.getItem("lead")) || [];
      const lead = leads.find((lead) => lead.id === parseInt(id));
      if (lead) {
        setEditLead(lead);
        reset(lead);
      }
    };

    if (id) {
      fetchLead();
    }
  }, [id, reset]);

  const handleSave = async (data) => {
    try {
      const leads = JSON.parse(localStorage.getItem("lead")) || [];
      if (id) {
        const updatedLeads = leads.map((lead) =>
          lead.id === parseInt(id) ? { ...lead, ...data } : lead
        );
        await localStorage.setItem("lead", JSON.stringify(updatedLeads));
      } else {
        const newId = leads.length > 0 ? leads[leads.length - 1].id + 1 : 1;
        const newData = { ...data, id: newId };
        const updatedLeads = [...leads, newData];
        await localStorage.setItem("lead", JSON.stringify(updatedLeads));
      }
      navigate("/");
    } catch (error) {
      console.log("Save failed", error);
    }
  };

  return (
    <section className="px-20 py-20">
      <div className="bg-white rounded px-20 py-20">
        <div className="border-bottom">
          <h3>Leads</h3>
          <div className="d-flex items-center mt-10">
            <Link to="/" className="active link">Home</Link>
            <MdArrowForwardIos size={10} />
            <Link to="/form" className="inactive link">Stage</Link>
          </div>
        </div>
        <div className="py-20">
          <h3>Leads Information</h3>
          <form>
            <div className="form-container gap-10">
              {formFields.map((item) => (
                <Input key={item.name} {...item} register={register} errors={errors} />
              ))}
            </div>
            <div className="btn-container">
              <Button
                name={"Cancel"}
                hanldeClick={() => navigate("/")}
                border={true}
              />
              <Button
                name={"Save"}
                hanldeClick={handleSubmit(handleSave)}
                border={false}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
