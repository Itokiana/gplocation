import React from 'react'
import moment from 'moment';
import axios from '../../../../axios'



class Days extends React.Component {
    state = {
        dateContext: moment(),
        datesaison: []
    }
    months  = moment.months();
    componentDidMount(){
        //console.log(this.props.month)
        this.setMonth(this.props.month)
        this.getDateSaison();
        // console.log(this.state.dateContext)
    }
    
    daysInMonths = () => {
        return this.state.dateContext.daysInMonth(); // nombre de jour dans un moi
    }
    firstDayOfMonth = () => {
        let dateContext = this.state.dateContext;
        let firstDay = moment(dateContext).startOf('month').format('d'); // iteration 0, 1, ...6
        return firstDay;
    }
    currentDay = () => {
        return this.state.dateContext.format("D");
    }
    getDateSaison = () => {
        axios.get(`/date_saisons`).then(response => {
            if (response.status === 200) {
                this.setState({
                    datesaison: response.data,
                    
                });
               //console.log(this.state.datesaison);
            }
        });
    }
    afficheTab = jourMoi => {
        const date = this.state.datesaison
        let hash = []
    
        date.map((date, key) =>{
            let debut = moment(date.debutsaison)
            let fin = moment(date.finsaison)
            let saison = date.saison_id
            //console.log(debut.format('M'))
            let anneD = parseInt(debut.format('Y'))
            let moisD = parseInt(debut.format('M'))
            let jourD = parseInt(debut.format('D'))
            let anneF = parseInt(fin.format('Y'))
            let moisF = parseInt(fin.format('M'))
            let jourF = parseInt(fin.format('D'))
            if (anneD == anneF){
                if(moisD == moisF){
                    if(jourD <= jourF ){
                        for(let i = jourD; i <= jourF; i++ ){
                            let saison$i = {}
                            saison$i["anne"]= anneD
                            saison$i["mois"]= debut.format('MMMM')
                            saison$i["jour"] = i
                            saison$i["saison"] = saison
                            hash.push(saison$i)

                        }
                    }
                    else{
                        console.log("eureu")
                    }

                }else if(moisF == moisD+1){
                    for(let j = jourD; j<= debut.daysInMonth(); j++ ){
                        let saison$j = {}
                        saison$j["anne"]= anneD
                        saison$j["mois"]= debut.format('MMMM')
                        saison$j["jour"] = j
                        saison$j["saison"] = saison
                        hash.push(saison$j)
                    }
                    for(let k=1; k<= jourF; k++){
                        let saison$k = {}
                        saison$k["anne"]= anneD
                        saison$k["mois"]= fin.format('MMMM')
                        saison$k["jour"] = k
                        saison$k["saison"] = saison
                        hash.push(saison$k)
                    }

                }else if(moisF == moisD+2){
                    for(let jk = jourD; jk<= debut.daysInMonth(); jk++ ){
                        let saison$jk = {}
                        saison$jk["anne"]= anneD
                        saison$jk["mois"]= debut.format('MMMM')
                        saison$jk["jour"] = jk
                        saison$jk["saison"] = saison
                        hash.push(saison$jk)
                    }
                    for(let kl=1; kl<= debut.add(1, 'month').daysInMonth(); kl++){
                        let saison$kl = {}
                        saison$kl["anne"]= anneD
                        saison$kl["mois"]= debut.add(1, 'month').format('MMMM')
                        saison$kl["jour"] = kl
                        saison$kl["saison"] = saison
                        hash.push(saison$kl)
                    }
                    for(let l=1; l<= jourF; l++){
                        let saison$l = {}
                        saison$l["anne"]= anneD
                        saison$l["mois"]= fin.format('MMMM')
                        saison$l["jour"] = l
                        saison$l["saison"] = saison
                        hash.push(saison$l)
                    }
                }

            }else if(anneD<anneF){
                if(moisD==12){
                    for(let m = jourD; m<= debut.daysInMonth(); m++){
                        let saison$m = {}
                        saison$m["anne"]= anneD
                        saison$m["mois"]= debut.format('MMMM')
                        saison$m["jour"] = m
                        saison$m["saison"] = saison
                        hash.push(saison$m)

                    }
                }else if(moisD==11){
                    for(let n = jourD; n<= debut.daysInMonth(); n++){
                        let saison$n = {}
                        saison$n["anne"]= anneD
                        saison$n["mois"]= debut.format('MMMM')
                        saison$n["jour"] = n
                        saison$n["saison"] = saison
                        hash.push(saison$n)

                    }
                    for(let o=1; o<= debut.add(1, 'month').daysInMonth(); o++){
                        let saison$o = {}
                        saison$o["anne"]= anneD
                        saison$o["mois"]= debut.add(1, 'month').format('MMMM')
                        saison$o["jour"] = o
                        saison$o["saison"] = saison
                        hash.push(saison$o)
                    }

                }

            }
            else{
                console.log("nonono")
            }
            
        });
        
        //console.log(hash)
        const filtreMois = hash.filter(person => person.mois == this.props.month)
        //console.log(filtreSaison)
        const filtreSaison1 = filtreMois.filter(sai => sai.saison == 1)
        const filtreSaison2 = filtreMois.filter(sai => sai.saison == 2)
        const filtreSaison3 = filtreMois.filter(sai => sai.saison == 3)

        const tab1 = []
        const tab2 = []
        const tab3 = []

        filtreSaison1.map(val=> {tab1.push(val.jour)})
        filtreSaison2.map(val=> {tab2.push(val.jour)})
        filtreSaison3.map(val=> {tab3.push(val.jour)})
        console.log(this.props.month)
        console.log('saison1', tab1)
        console.log('saison2', tab2)
        console.log('saison3', tab3)

        if (tab1.includes(jourMoi) == true){
            return "bg-danger rounded "
        }else if (tab2.includes(jourMoi) == true){
            return "bg-primary rounded"
        }else if (tab3.includes(jourMoi) == true){
            return "bg-success rounded"
        }else{
            return "bg-warning rounded"
        }


    }

    setMonth = month => {
            let monthNo = this.months.indexOf(month);// get month number 
            let dateContext = Object.assign({}, this.state.dateContext);
            dateContext = moment(dateContext).set("month", monthNo); // change month value
            this.setState({
            dateContext: dateContext // add to state
            });
            
    };
    render(){
        let blanks = [];
        for (let i = 0; i < this.firstDayOfMonth(); i++) {
        blanks.push(<td className="emptySlot">
            {"  "}
        </td>);
        }
        
        let daysInMonth = [];

        for (let d = 1; d <= this.daysInMonths(); d++) {
            let className = this.afficheTab(d)
            daysInMonth.push(
                <div key={d} className= {className}  >
                    {d}
                </div>
            );
        }
        
        var totalSlots = [...blanks, ...daysInMonth];
        let trElement = totalSlots.map((jour, j) => {
            return (
                <td key={j*10} >
                    {jour}
                </td>
            )

        })
        return(
            <>
                {trElement}
            </>
       
        
        )
    }

}
export default Days;