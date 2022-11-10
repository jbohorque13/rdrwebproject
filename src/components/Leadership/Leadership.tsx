import React from 'react'
import {Content, Base} from './style';

interface LeadershipProps {
  full_name: string;
  phone_number: number;
  email?: string
  coordination?: string
  group_day?: string
  group_hour?: string
  many_leadership?: string
  promedium_ages?: string
  type_group?: string
  many_people_in_group?: string
  received_peole_pount_conection?: string
  class_type?: string
  group_place?: string
  status_leadership?: string
  assisted_assistance?: string
  many_type_church?: string
  address?: string
  locality?: string
  service_church_assisted?: string
  ministery_services_particitiped?: string
  age?: string
}

const Leadership = (data: LeadershipProps) => {
  console.log(data);
  //useMemo
  /*
    Render varios objectos del tipo JSX.element donde tendran esta forma
  */
  const renderPeople: React.ReactNode = React.useMemo(() => {
    return [data].map(row => (
      <Base>
        <Content key={row.full_name}>{row.full_name}</Content>
        <Content key={row.phone_number}>{row.phone_number}</Content>
      </Base>
    ))
  }, []);
  
  return (
    <>
      {renderPeople}
    </>
    
  )
}

export default Leadership