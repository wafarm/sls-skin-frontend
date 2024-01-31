import PropTypes from "prop-types";
import styled from "styled-components";

const Group = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: gray;
    width: 28px;
    height: 28px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 6px 12px;
  margin-right: 6px;
  height: 24px;
  line-height: 1.5;
  font-size: 1rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  outline: none;
  transition: border-color 0.15s;

  &:focus {
    border-color: #80bdff;
  }
`;

export const InputGroup = (props) => {
  let { icon, ...other } = props;
  return (
    <Group>
      <Input {...other} />
      {icon}
    </Group>
  );
};

InputGroup.propTypes = {
  icon: PropTypes.element,
};
