import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';


export interface IValues {
    first_name: string,
    last_name: string,
    email: string,
    phone: string,
    address: string,
    description: string,
}

export interface IFormState {
    [key: string]: any;
    values: IValues[];
    submitSuccess: boolean;
    loading: boolean;
}

class Create extends React.Component<RouteComponentProps, IFormState> {
    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            address: '',
            description: '',
            values: [],
            loading: false,
            submitSuccess: false,
        }
    }

    private processFormSubmission = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        this.setState({ loading: true });

        const formData = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            phone: this.state.phone,
            address: this.state.address,
            description: this.state.description,
        }

        this.setState({ submitSuccess: true, values: [...this.state.values, formData], loading: false });

        axios.post(`http://localhost:5000/customers`, formData).then(data => [
            setTimeout(() => {
                this.props.history.push('/');
            }, 1500)
        ]);
    }

    private handleInputChanges = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value,
        })
    }

    public render() {
        const { submitSuccess, loading } = this.state;
        return (
            <div>
                <div className={"col-md-12 form-wrapper"}>
                    {!submitSuccess && (
                        <div className="alert alert-info mt-4 mb-4" role="alert">
                            Fill the form to create a new contact
                    </div>
                    )}

                    {submitSuccess && (
                        <div className="alert alert-info" role="alert">
                            The form was successfully submitted!
                            </div>
                    )}

                    <form id={"create-post-form"} onSubmit={this.processFormSubmission} noValidate={true}>
                        <div className="form-group col-md-12">
                            <label htmlFor="first_name"> First Name </label>
                            <input type="text" id="first_name" onChange={(e) => this.handleInputChanges(e)} name="first_name" className="form-control" placeholder="first name" />
                        </div>

                        <div className="form-group col-md-12">
                            <label htmlFor="last_name"> Last Name </label>
                            <input type="text" id="last_name" onChange={(e) => this.handleInputChanges(e)} name="last_name" className="form-control" placeholder="last name" />
                        </div>

                        <div className="form-group col-md-12">
                            <label htmlFor="email"> Email </label>
                            <input type="email" id="email" onChange={(e) => this.handleInputChanges(e)} name="email" className="form-control" placeholder="email address" />
                        </div>

                        <div className="form-group col-md-12">
                            <label htmlFor="phone"> Phone </label>
                            <input type="text" id="phone" onChange={(e) => this.handleInputChanges(e)} name="phone" className="form-control" placeholder="phone number" />
                        </div>

                        <div className="form-group col-md-12">
                            <label htmlFor="address"> Address </label>
                            <input type="text" id="address" onChange={(e) => this.handleInputChanges(e)} name="address" className="form-control" placeholder="address" />
                        </div>

                        <div className="form-group col-md-12">
                            <label htmlFor="description"> Description </label>
                            <input type="text" id="description" onChange={(e) => this.handleInputChanges(e)} name="description" className="form-control" placeholder="Enter Description" />
                        </div>

                        <div className="form-group col-md-4 pull-right">
                            <button className="btn btn-primary" type="submit">
                                Create contact
              </button>
                            {loading &&
                                <span className="fa fa-circle-o-notch fa-spin" />
                            }
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(Create)
